document.addEventListener('DOMContentLoaded', (charge_complete) => {

    const form = document.getElementById('Form');
    const contact = document.getElementById('contact');
    const menu_logo = document.getElementById('menu-logo');

    const display_contact = () => {
        if (window.innerWidth <=768) {
            contact.style.display = 'none';
        } else {
            contact.style.display = 'block';
        }
    };

    display_contact();
    window.addEventListener('resize', display_contact);

    form.addEventListener('submit', (submit_cancel) => {
        submit_cancel.preventDefault();
        alert('Mensagem enviada com sucesso!');
        window.location.reload();
    });
    
    menu_logo.addEventListener('mouseover', (over_menu) => {
        menu_logo.style.transform = 'rotate(90deg)';
        contact.style.display = 'block';
    });
    
    contact.addEventListener('mouseout', (out_menu) => {
        menu_logo.style.transform = 'rotate(0deg)';
        contact.style.display = 'none';
    });

    
});
