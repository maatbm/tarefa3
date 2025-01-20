document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('Form');
    const contact = document.getElementById('contact');
    const menu = document.getElementById('menu');
    const menu_logo = document.getElementById('menu-logo');

    function touch_contact_display(display) {
        if (display === 'block') {
            contact.classList.add('show');
            document.body.style.overflow = 'hidden';
        } else {
            contact.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    function display_contact() {
        if (window.innerWidth <= 800) {
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
        display_contact();
    });

    var flag = false;
    menu_logo.addEventListener('click', () => {
        if (!flag) {
            menu_logo.style.transform = 'rotate(90deg)';
            menu.style.boxShadow = 'none';
            touch_contact_display('block');
            flag = true;
        } else {
            touch_contact_display('none');
            menu_logo.style.transform = 'rotate(0deg)';
            menu.style.boxShadow = '0px 0px 10px var(--pink)';
            flag = false;
        }
    });

    contact.addEventListener('mouseover', () => {
        touch_contact_display('block');
    });

});
