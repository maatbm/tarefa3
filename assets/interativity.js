document.addEventListener('DOMContentLoaded', (charge_complete) => {
    const form = document.getElementById('Form');
    form.addEventListener('submit', (submit_cancel) => {
        submit_cancel.preventDefault();
        alert('Mensagem enviada com sucesso!');
        window.location.reload();
    });
});
