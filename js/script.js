function compareTimezones() {
    var country1 = document.getElementById("country1").value;
    var country2 = document.getElementById("country2").value;
  
    if (country1 === country2) {
      document.getElementById("result").innerText = "Por favor, selecione países diferentes.";
      return;
    }
  
    var now = new Date();
    var time1 = now.toLocaleString("en-US", {timeZone: getCountryTimezone(country1)});
    var time2 = now.toLocaleString("en-US", {timeZone: getCountryTimezone(country2)});
  
    document.getElementById("result").innerText = `Horário em ${country1}: ${formatDateTime(time1)}\nHorário em ${country2}: ${formatDateTime(time2)}`;
}

function getCountryTimezone(country) {
    // Mapeamento de fusos horários por país
    var timezones = {
        "Brazil": "America/Sao_Paulo",
        "United States": "America/New_York",
        "United Kingdom": "Europe/London",
        "China": "Asia/Shanghai",
        "India": "Asia/Kolkata",
        // Adicione mais países e seus respectivos fusos horários conforme necessário
    };

    return timezones[country];
}

function formatDateTime(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1; // Os meses começam do zero, por isso é necessário adicionar 1
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Formata a data e hora como "dia/mês/ano hora:minuto"
    return `${padZero(day)}/${padZero(month)}/${year} ${padZero(hours)}:${padZero(minutes)}`;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}
