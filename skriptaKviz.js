$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Pitanje broj %current od %total',
    questions: [
    {
          'q': 'Kada je rodjen Nikola?',
          'options': [
          '10.07.1856',
          '12.05.1854',
          '21.06.1855',
          '10.02.1856'
          ],
          'correctIndex': 0,
          'correctResponse': 'Tačan odgovor!',
          'incorrectResponse': 'Netačan odgovor!'
      },
      {
          'q': 'Gde je rodjen Nikola Tesla?',
          'options': [
          'Smiljan',
          'Pancevo',
          'Beograd',
          'Brodarevo'
          ],
          'correctIndex': 0,
          'correctResponse': 'Tačan odgovor!',
          'incorrectResponse': 'Netačan odgovor!'
      },
      {
          'q': 'Koliko godina je imao Nikola Tesla kad je umro?',
          'options': [
          '78',
          '87',
          '90',
          '65'
          ],
          'correctIndex': 1,
          'correctResponse': 'Tačan odgovor!',
          'incorrectResponse': 'Netačan odgovor!'
      },
      {
          'q': 'Izaberi Teslin izum:',
          'options': [
          'Veš mašina',
          'Protivvazdušni raketni sistem',
          'Telefon',
          'Motor naizmenične struje'
          ],
          'correctIndex': 3,
          'correctResponse': 'Tačan odgovor!',
          'incorrectResponse': 'Netačan odgovor!'
      },
      {
          'q': 'Kojim brojem je bio Tesla opsednut?',
          'options': [
          '1',
          '7',
          '3',
          '10'
          ],
          'correctIndex': 2,
          'correctResponse': 'Tačan odgovor!',
          'incorrectResponse': 'Netačan odgovor!'
      }
    ]
  });