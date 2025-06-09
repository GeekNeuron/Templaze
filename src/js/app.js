import '../css/main.scss';
import { classicTemplate } from './templates/classic';
import { modernTemplate } from './templates/modern';
import { businessTemplate } from './templates/business';

document.addEventListener('DOMContentLoaded', () => {
    const previewArea = document.getElementById('preview-area');

    const renderTemplate = (template) => {
        previewArea.innerHTML = template;
    };

    document.getElementById('classic-btn').addEventListener('click', () => renderTemplate(classicTemplate));
    document.getElementById('modern-btn').addEventListener('click', () => renderTemplate(modernTemplate));
    document.getElementById('business-btn').addEventListener('click', () => renderTemplate(businessTemplate));

    // Load a default template on start
    renderTemplate(classicTemplate);
});
