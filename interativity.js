document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('Form');
    const contact = document.getElementById('contact');
    const menu_logo = document.getElementById('menu-logo');

    function touch_contact_display(display) {
        contact.style.display = display;
    }

    function display_contact() {
        if (window.innerWidth <= 768) {
            touch_contact_display('none');
        } else {
            touch_contact_display('block');
        }
    }

    display_contact();
    window.addEventListener('resize', display_contact);

    form.addEventListener('submit', (submit_cancel) => {
        submit_cancel.preventDefault();
        alert('Mensagem enviada com sucesso!');
        window.location.reload();
    });

    menu_logo.addEventListener('mouseover', () => {
        menu_logo.style.transform = 'rotate(90deg)';
        touch_contact_display('block');
    });

    contact.addEventListener('mouseover', () => {
        touch_contact_display('block');
    });

    contact.addEventListener('mouseout', () => {
        if (window.innerWidth <= 768) {
            touch_contact_display('none');
            menu_logo.style.transform = 'rotate(0deg)';
        }
    });

});
