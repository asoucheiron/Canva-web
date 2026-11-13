// Integración con el editor de Canva (window.elementSdk).
// Solo cambia textos y variables CSS de :root; styles.css decide dónde se aplica cada color.
// Fuera de Canva no hace nada y la app usa los valores por defecto de styles.css.

const DEFAULT_CONFIG = {
    app_title: 'Gestor de Rutas de Hoteles',
    instruction_text: 'Selecciona los hoteles para calcular la ruta más eficiente',
    background_color: '#667eea',
    surface_color: '#ffffff',
    text_color: '#2d3748',
    primary_action_color: '#667eea',
    secondary_action_color: '#48bb78',
    font_family: 'Inter',
    font_size: 16
};

// Qué variable CSS controla cada opción de color
const COLOR_VARIABLES = {
    background_color: '--bg-start',
    surface_color: '--surface',
    text_color: '--text',
    primary_action_color: '--primary',
    secondary_action_color: '--success'
};

function applyTheme(config) {
    const value = key => config[key] || DEFAULT_CONFIG[key];
    const root = document.documentElement.style;

    document.getElementById('app-title').textContent = value('app_title');
    document.getElementById('instruction-text').textContent = value('instruction_text');

    for (const [key, cssVar] of Object.entries(COLOR_VARIABLES)) {
        root.setProperty(cssVar, value(key));
    }
    root.setProperty('--font', value('font_family'));
    root.setProperty('--title-size', `${value('font_size') * 2}px`);
    root.setProperty('--instruction-size', `${value('font_size')}px`);
}

// Lectura/escritura de una opción desde el panel de Canva
function editableOption(config, key) {
    return {
        get: () => config[key] || DEFAULT_CONFIG[key],
        set: value => {
            config[key] = value;
            window.elementSdk.setConfig({ [key]: value });
        }
    };
}

async function initTheme() {
    if (!window.elementSdk) return;

    await window.elementSdk.init({
        defaultConfig: DEFAULT_CONFIG,
        onConfigChange: async config => applyTheme(config),
        mapToCapabilities: config => ({
            recolorables: Object.keys(COLOR_VARIABLES).map(key => editableOption(config, key)),
            borderables: [],
            fontEditable: editableOption(config, 'font_family'),
            fontSizeable: editableOption(config, 'font_size')
        }),
        mapToEditPanelValues: config => new Map([
            ['app_title', config.app_title || DEFAULT_CONFIG.app_title],
            ['instruction_text', config.instruction_text || DEFAULT_CONFIG.instruction_text]
        ])
    });
}
