document.addEventListener('DOMContentLoaded', function () {
    const diaButtons = document.querySelectorAll('.dia');
    const horariosDisponiveis = document.getElementById('horarios-disponiveis');
    const horariosContainer = document.getElementById('horarios');

    const horarios = [
        "08:00", "09:00", "10:00", "11:00",
        "13:00", "14:00", "15:00", "16:00"
    ];

    diaButtons.forEach(button => {
        button.addEventListener('click', function () {
            horariosDisponiveis.style.display = 'block';
            horariosContainer.innerHTML = '';

            horarios.forEach(horario => {
                const horarioButton = document.createElement('button');
                horarioButton.innerText = horario;
                horarioButton.addEventListener('click', function () {
                    horariosContainer.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = "#e6e6e6");
                    horarioButton.style.backgroundColor = "#ffcc00";
                });
                horariosContainer.appendChild(horarioButton);
            });
        });
    });
});
