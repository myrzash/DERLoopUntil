const DATAS = {
    ru: {
        title: "Цикл с постусловием",
        grade: "8 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Bill Gates',
            phrase: 'Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу.',
        },
        parts: [
            {
                title: 'Изучи',
                info: 'Чтобы научится программировать необходимо знать синтаксис языка',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Изучи',
                            subTitle: 'Цикл|с постусловием',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                // height: 700,
                            }
                        },
                        views: [{
                            name: 'm-text',
                            big: true,
                            title: 'Цикл',
                            text: ['- это многократно повторяющаяся последовательность действий.',
                                'Последовательность действий, которые повторяются в цикле, называют <b>телом</b> цикла. Один проход цикла называют <b>шагом</b>, или итерацией. Переменные, которые изменяются внутри цикла и влияют на его окончание, называются <b>параметрами</b> цикла.']
                        },
                            /*   {
                                      name: 'm-video',
                                      // src: 'public/1/nature.mp4',
                                      isImage: true,
                                      // bg: 'public/1/v1.png',
                                      // backgroundColor: '#cbe7ff',
                                  }, */
                            {
                                name: 'm-text', big: true,
                                title: 'Следует помнить',
                                text: ['При написании циклических алгоритмов следует помнить следующее.',
                                    '<b>Во-первых</b>, чтобы цикл имел шанс когда-нибудь закончиться, содержимое его тела должно обязательно влиять на условие цикла.',
                                    '<b>Во-вторых</b>, условие должно состоять из корректных выражений и значений, определенных еще до первого выполнения тела цикла.']
                            },{
                                name: 'm-video',
                                src: 'public/1/tom_sawyer.mp4',
                                 bg: 'public/2/bg.jpg',
                                isImage: true
                                // bg: 'public/1/v1.png',
                                // backgroundColor: '#cbe7ff',
                            },{
                                name: 'm-text', big: true,
                                text: ['Что в данном видеофрагменте является ключевым действием? Является ли это циклом? Почему?',
                                    'Если ты имеешь ответы на эти вопросы, то ты свой в мире программирования! ;-)',
                                    ' Ну, а если остались вопросы, то давай попробуем ответить на них вместе!',
                                    'Тебе уже известно, что в программировании цикл используется в том случае, когда необходимо повторить какую-то последовательность действий. Для решения задач используются несколько видов циклов: цикл с параметром, цикл с предусловием, цикл с постусловием.']
                            }, [{
                                name: 'm-image',
                                height: '450px',
                                src: 'public/1/s1_ru.png',
                            }, {
                                name: 'm-image',
                                height: '360px',
                                src: 'public/1/s2_ru.png',
                            }, {
                                name: 'm-image',
                                src: 'public/1/s3_ru.png',
                            }], {
                                name: 'm-text', big: true,
                                title: 'Repeat …Until',
                                text: ['Наиболее часто в решении задач используется цикл с параметром, если известно число повторений, и цикл с предусловием, когда неизвестно число повторений. Но есть еще один цикл, с которым тебе предстоит познакомиться!',
                                    'Цикл с постусловием <b>Repeat …Until</b> (Повторять ДО тех пор ПОКА…)',
                                    'Например: <b>Repeat</b> у:= а+1 <b>until</b> а+2>10',
                                    'Читается так: Повторяй у присваивать а+1 до тех пор, пока а+2 не станет больше 10.']
                            }, [{
                                name: 'm-image',
                                height: '540px',
                                src: 'public/1/r_ru.png'
                            }, {
                                name: 'm-text', big: true,
                                title: 'Работа оператора repeat',
                                text: ['1. Выполняется <b>тело цикла</b>;',
                                    '2. Проверяется <b>условие выхода</b> из цикла; (Поэтому цикл выполняется хотя бы один раз)',
                                    '3. Если условие ложно, то <b>переход</b> к п.1;',
                                    '4. Если условие истинное, то происходит <b>выход</b> из цикла.']
                            }], {
                                name: 'm-text', big: true,
                                text: ['Есть несколько моментов, на которые стоит обратить <b>внимание</b>:',
                                    '<b>Во-первых</b>, тело цикла с постусловием выполняется <b>пока условие ложно</b> (False).',
                                    '<b>Во-вторых</b>, при наличии нескольких команд, которые помещаются в тело цикла, заключать их в операторные скобки <b>BEGIN ... END не нужно</b> - зарезервированные слова <b>REPEAT ... UNTIL</b> сами составляют аналогичный блок.',
                                    '<b>В-третьих</b>, цикл с постусловием всегда выполняется <b>хотя бы один раз</b>! Но при неверно написанном условии цикл станет <b>"вечным"</b>.']
                            }, {
                                name: 'm-text',
                                title: 'Синтаксис',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }]
                    }
                }
            },
            {
                title: 'Как работает цикл?',
                info: 'Демонстрация работы цикла в программе, написанной на языке программирования',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Как работает цикл в программе?',
                            subTitle: 'Цикл|с постусловием',
                            bg: {
                                parallax: 'public/2/bg.jpg',
                                // video: 'public/video4.mp4',
                                // height: 400,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Каждый программист при решении поставленной задачи определяет свой путь реализации. Важно учитывать при этом следующее:</p>' +
                                '<ol><li>Код программы не должен содержать «<b>лишние</b>» команды, т.е. исключить избыточность команд в коде.</li>' +
                                '<li>Способствовать достижению результата, т.е. поставленной цели.</li>' +
                                '<li>Полученное решение не является единственным.</li>' +
                                '</ol>\n' +
                                '<br/>\n' +
                                '<p>Таким образом, одну и ту же задачу можно решить разными способами, т.е. ты можешь использовать один из изученных циклов!</p>\n' +
                                '<p>В качестве примера рассмотрим следующую задачу: вывести квадраты чисел, не превышающих 10.\n' +
                                'Для старта нужно открыть Delphi или Lazarus и создать новый проект.</p>']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/buttonlabel.png',
                            }, {
                                name: 'm-text',
                                big: true,
                                title: '1 шаг',
                                backgroundColor: '#cbe7ff',
                                text: ['Расположить на форме компоненты <b>Button</b> и <b>Label</b>:']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: '2 шаг',
                                backgroundColor: '#cbe7ff',
                                text: ['Создать на кнопке процедуру <b>OnClick</b> и ввести переменную <b>I</b> типа <b>Integer</b>']
                            }, {
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }], [{
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">//Присваиваем единицу</span>' +
                                '<br><span class="font300 black--text mr-1 ml-1">I:=1;</span>' +
                                '<br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                title: '3 шаг',
                                backgroundColor: '#cbe7ff',
                                text: ['Теперь между ключевыми словами <b>begin</b> и <b>end</b> установить значение переменной <b>I</b> равное 1: <b>I:=1</b>;']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: '4 шаг',
                                backgroundColor: '#cbe7ff',
                                text: ['Написать цикл, с условием <b>I>=10</b>, то есть пока <b>I</b> не равно 10 будет выполняться цикл. Если же <b>I>= 10</b> - цикл остановится.']
                            }, {
                                name: 'm-text',
                                big: true,
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span class="green--text text--darken-2 font300">//выполнять до тех пор</span>' +
                                '<br><span>Repeat</span>' +
                                '<br><span class="font300 green--text text--darken-2">//прибавляем единицу</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<br><span class="font300 green--text text--darken-2">//выводим квадрат значения I</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//пока i>=10</span>' +
                                '</div>'
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'Общий вид кода',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//Присваиваем единицу</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//выполнять до тех пор</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//прибавляем единицу</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//выводим квадрат значения I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//пока i>=10</span>' +
                                '<br><br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Для того, чтобы увидеть как работает цикл пошагово:',
                                    'Дописать после строки: <b>Label1.Caption:=IntToStr(a);</b>',
                                    'Вот эти две строчки: ',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    'Они делают следующие: ',
                                    '<b>Application.HandleMessage</b> - это метод, позволяющий выводить значения переменных во время работы цикла. Не смотря на то, что мы и так выводим переменную в лабел, этот метод необходим.',
                                    '<b>sleep(100)</b> - функция Sleep() говорит программе, что нужно поспать, как бы заморозиться на какое-то количество миллисекунд. Миллисекунды указываются в скобках. В секунде 1000 миллисекунд.'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//Присваиваем единицу</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//выполнять до тех пор</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//прибавляем единицу</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//выводим квадрат значения I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//пока i>=10</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Для демонстрации того, что цикл выполнится один раз, надо начальное значение переменной I присвоить равным 10. Код программы будет следующим:',
                                    'Общий вид кода:'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font700 black--text">I:=10;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//Присваиваем 10</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//выполнять до тех пор</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//прибавляем единицу</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//выводим квадрат значения I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//пока i>=10</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                        ]
                    }
                }
            },
            {
                title: 'Анализируй',
                image: 'part3.png',
                info: 'Выполни задания и определи свой уровень знаний',
                interactive:
                    {
                        name: 'input-test',
                        items: {
                            title: 'Выполни задания и определи свой уровень знаний',
                            excesses: {
                                data: [{
                                    question: 'Если условие верное, то цикл repeat . . . until продолжится?',
                                    variants: ['Нет, это условие на выход из цикла',
                                        'Да, работа цикла продолжается',
                                        'Да, если условие на продолжение верное',
                                        'Да, если условие на продолжение ложное']
                                }, {
                                    question: 'Чем отличается цикл while от цикла repeat?',
                                    variants: ['Цикл while – с предусловием, цикл repeat – с постусловием',
                                        'Цикл while – с постусловием, цикл repeat – с предусловием',
                                        'Цикл while – с параметром, цикл repeat – с постусловием',
                                        'Циклы while и repeat – циклы с условием']
                                }]
                            },
                            title2: 'Какое значение будет принимать переменная "y" после выполнения программы:',
                        }
                    }
            }
        ]
    },
    kz: {
        title: "Ілеспе шарты бар цикл",
        grade: "8 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Bill Gates',
            phrase: 'Программа әзірлеушінің өнімділігін код жолдарының санына қарап өлшеу – ұшақтың жасалуын оның салмағына қарап бағалағанмен бірдей.',
        },
        parts: [
            {
                title: 'Ізден',
                info: 'Программа әзірлеуді үйреніп алу үшін тілдің синтаксисін білу қажет.',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Ізден',
                            subTitle: 'Ілеспе|шарты бар цикл',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                            }
                        },
                        views: [{
                            name: 'm-text',
                            big: true,
                            title: 'Цикл',
                            text: ['- бұл бірнеше рет қайталанып отыратын іс-қимылдардың реті.',
                                'Циклде қайталанып отыратын іс-қимылдың реті циклдің <b>денесі</b> деп аталады. Циклдің біржолғы өтуі <b>қадам</b> немесе <b>итерация</b> деп аталады.  Циклдің ішінде өзгеріп отыратын және оның аяқталуына әсер ететін айнымалылар циклдің <b>параметрі</b> деп аталады.']
                        },
                            /*   {
                                      name: 'm-video',
                                      // src: 'public/1/nature.mp4',
                                      isImage: true,
                                      // bg: 'public/1/v1.png',
                                      // backgroundColor: '#cbe7ff',
                                  }, */
                            {
                                name: 'm-text', big: true,
                                title: 'Мынаны естен шығармаған жөн',
                                text: ['Циклдік алгоритмді жазу кезінде мынаны естен шығармаған жөн.',
                                    '<b>Біріншіден</b>, әлдебір уақытта циклдің аяқталуына мүмкіндік болу үшін оның денесіндегі нәрсе міндетті түрде циклдің шартына әсер етіп отыруы тиіс.',
                                    '<b>Екіншіден</b>, алғаш рет орындалмай тұрып анықталған шарт циклінің денесі дұрыс өрнектер мен мәндерден құралған болуы тиіс.']
                            }, /*
                         {
                            name: 'm-video',
                            // src: 'public/1/nature.mp4',
                            isImage: true,
                            // bg: 'public/1/v1.png',
                            // backgroundColor: '#cbe7ff',
                        },
                        */ {
                                name: 'm-text', big: true,
                                text: ['Бұл бейнеүзіндідегі басты іс-қимыл қандай? Бұл цикл болып табыла ма? Неліктен?',
                                    'Егер сен осы сұрақтарға жауап бере  алсаң, демек программа әзірлеу сенің салаң!',
                                    'Әлі де сұрақтарың болса, оларға бірге жауап іздеп көрейік!',
                                    'Сен  қажет болған кезде программа әзірлеу үшін циклдік іс-қимылды қандай да бір реттілікпен қайталап шығу керек екенін білесің.']
                            }, [{
                                name: 'm-image',
                                height: '450px',
                                src: 'public/1/s1_kz.png',
                            }, {
                                name: 'm-image',
                                height: '360px',
                                src: 'public/1/s2_kz.png',
                            }, {
                                name: 'm-image',
                                src: 'public/1/s3_kz.png',
                            }], {
                                name: 'm-text', big: true,
                                title: 'Repeat …Until',
                                text: ['. Есеп шығаруда циклдің бірнеше түрі қолданылады: параметрі бар цикл, алғышарты бар цикл, ілеспе шарты бар цикл.',
                                    'Қайталаудың саны белгілі болған кезде есеп шығару үшін  көбіне параметрі бар цикл қолданылады және қайталау саны белгісіз болған жағдайда алғышарты бар цикл қолданылады  және қайталаулар саны белгісіз болған жағдайда алғышарты бар цикл қолданылады.',
                                    '<b>Мысалы:</b>',
                                    'Былай оқылады: <b>а+2</b> мәні <b>10</b> мәнінен асқанша <b>у</b> мәніне <b>а+1</b> тағайындауды қайталап отыр.']
                            }, [{
                                name: 'm-image',
                                height: '540px',
                                src: 'public/1/r_kz.png'
                            }, {
                                name: 'm-text', big: true,
                                title: 'Repeat операторының жұмысы',
                                text: ['1. Циклдің <b>денесі</b> орындалады;',
                                    '2. Циклден шығу <b>шарты</b> тексеріледі; (Сол себепті цикл тым болмағанда бір рет орындалады)',
                                    '3. Егер шарт жалған болса, онда 1-т. <b>ауысу</b>;',
                                    '4. Егер шарт шынайы болса, онда циклден <b>шығу</b> орын алады.']
                            }], {
                                name: 'm-text', big: true,
                                text: ['Назар аударуға тұрарлық бірнеше сәттер бар:',
                                    '<b>Біріншіден</b>, ілеспе шарты бар циклдің денесі шарт жалған (<b>False</b>) болып тұрған уақытта орындалады.',
                                    '<b>Екіншіден</b>, циклдің денесіне енгізілетін бірнеше команда болған жағдайда оларды <b>BEGIN END</b> операторлық жақшаға алудың қажеті болмайды – <b>REPEAT UNTIL</b> резервтелген сөздердің өзі баламалы блокты құрайды.',
                                    '<b>Үшіншіден</b>, ілеспе шарты бар цикл тым болмағанда бір рет орындалады! Алайда шарты дұрыс жазылмаған жағдайда цикл <b>"мәңгілік"</b> циклге айналады.']
                            }, {
                                name: 'm-text',
                                title: 'Синтаксис',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }]
                    }
                }
            },
            {
                title: 'Цикл қалай жұмыс істейді?',
                info: 'Программа жасау тілінде жазылған программадағы циклдің жұмысын көрсету',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Цикл программада|қалай жұмыс істейді?',
                            subTitle: 'Ілеспе|шарты бар цикл',
                            bg: {
                                parallax: 'public/2/bg.jpg',
                                // video: 'public/video4.mp4',
                                // height: 400,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Әрбір программа жасаушы алдына қойған мәселені (есепті) шешу кезінде оны іске асырудың өзіндік жолын белгілейді. Бұл жағдайда келесіні ескерген жөн:',
                                    '<ol><li>программа кодында «<b>артық</b>» командалар болмауы тиіс, яғни кодта командалардың артық санына жол бермеуі тиіс.</li>' +
                                    '<li>Нәтижеге, яғни алға қойылған мақсатқа жетуге ықпал ету.</li>' +
                                    '<li>Алынған шешім жалғыз ғана шешім болып табылмайды.</li>' +
                                    '</ol>',
                                    'Осылайша, бір ғана есепті әртүрлі әдіспен шешуге болады, яғни сен алынған циклдің бірін қолдана аласың!',
                                    'Мысал ретінде келесі есепті қарастырайық: 10-нан аспайтын сандардың квадратын шығару.' +
                                    'Бастау үшін Delphi немесе Lazarus программа тілін ашып, жаңадан жоба құру қажет.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/buttonlabel.png',
                            }, {
                                name: 'm-text',
                                big: true,
                                title: '1-қадам',
                                backgroundColor: '#cbe7ff',
                                text: ['<b>Button</b> және <b>Label</b> пішінді компоненттерді жайғастыру']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: '2-қадам',
                                backgroundColor: '#cbe7ff',
                                text: ['Түймешікте <b>OnClick</b> рәсімін құру және <b>I</b> типіндегі <b>Integer</b> айнымалы мәнін енгізу.']
                            }, {
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }], [{
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">//бірді тағайындаймыз</span>' +
                                '<br><span class="font300 black--text mr-1 ml-1">I:=1;</span>' +
                                '<br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                title: '3-қадам',
                                backgroundColor: '#cbe7ff',
                                text: ['Енді <b>begin</b> және <b>end</b> негізгі сөздердің арасына <b>I</b> айнымалының <b>1</b>-ге тең мәнін қоюға болады: <b>I:=1</b>;']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: '4-қадам',
                                backgroundColor: '#cbe7ff',
                                text: ['<b>I >=10</b> шартына ие циклді жазу, яғни <b>I</b> мәні <b>10</b> мәніне тең болмаған барлық уақытта цикл орындалатын болады. Егер <b>I>= 10</b> болса - цикл тоқтайды.']
                            }, {
                                name: 'm-text',
                                big: true,
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span class="green--text text--darken-2 font300">//дейін орындау</span>' +
                                '<br><span>Repeat</span>' +
                                '<br><span class="font300 green--text text--darken-2">//бірді қосамыз</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<br><span class="font300 green--text text--darken-2">//I мәнінің квадратын шығарамыз</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//i>=10 болғанда</span>' +
                                '</div>'
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'Кодтың жалпы түрі:',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//бірді тағайындаймыз</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//дейін орындау</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//бірді қосамыз</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//I мәнінің квадратын шығарамыз</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//i>=10 болғанда</span>' +
                                '<br><br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Циклдің қалай жұмыс жасайтындығын қадамдап көру үшін:',
                                    '<b>Label1.Caption:=IntToStr(a);</b> жолдан кейін келесіні жазу қажет: ',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    'Осы екі жол: ',
                                    '<b>Application.HandleMessage</b> - бұл цикл жұмысы кезінде айнымалы мәндерін шығаруға мүмкіндік беретін әдіс. Айнымалыны лабелге енгізетіндігімізге қарамастан, бұл әдіс қажет.',
                                    '<b>sleep(100)</b> - функциясы қандай да бір миллисекундта тұрып қалу үшін программаға нені жазу керектігін айтады. Миллисекунд жақша ішінде көрсетіледі. Бір секундта 1000 миллисекунд бар.'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//бірді тағайындаймыз</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//дейін орындау</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//бірді қосамыз</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//I мәнінің квадратын шығарамыз</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//i>=10 болғанда</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Кодтың жалпы түрі:',
                                text: ['Циклдің бір рет орындалатынын көрсету үшін І айнымалының бастапқы мәнін 10 мәніне тең деп тағайындау керек. программа коды мынадай болады:'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font700 black--text">I:=10;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//10 тағайындаймыз</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//дейін орындау</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//бірді қосамыз</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//I мәнінің квадратын шығарамыз</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//i>=10 болғанда</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                        ]
                    }
                }
            },
            {
                title: 'Талда',
                image: 'part3.png',
                info: 'Тапсырмаларды орындап және өз білім деңгейіңді анықта',
                interactive:
                    {
                        name: 'input-test',
                        items: {
                            title: 'Тапсырманы орындап, өз біліміңнің деңгейін анықта.',
                            excesses: {
                                data: [{
                                    question: 'Егер шарт дұрыс болса, онда repeat until  циклі жалғаса ма?',
                                    variants: ['Жоқ, бұл шарт циклден шықпайды.',
                                        'Ия, циклдің жұмысы жалғасуда,',
                                        'Ия, егер жалғасу шарты дұрыс болса,',
                                        'Ия, егер жалғасу шарты жалған болса']
                                }, {
                                    question: 'while циклі repeat циклінен несімен өзгешеленеді?',
                                    variants: ['while циклі – алғышартымен, repeat  циклі – ілеспе шартымен',
                                        'while циклі –  ілеспе шартымен , repeat  циклі –  алғышартымен',
                                        'while циклі – параметрімен, repeat  циклі – ілеспе шартымен',
                                        'while және repeat циклдері – шарты бар циклдер']
                                }]
                            },
                            title2: '"y" айнымалы программа орындалғаннан кейін қандай мәнге ие болады?',
                        }
                    }
            }
        ]
    },
    en: {
        title: "Post-test loop",
        grade: "Grade 8",
        typeder: "On-line lecture",
        prologue: {
            author: 'Bill Gates',
            phrase: 'To measure productivity of a computer programmer by calculating code lines is the same as if we would assess a plane construction by its weight.',
        },
        parts: [
            {
                title: 'Learn',
                info: 'It is required to know the language syntax in order to learn how to program',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Learn',
                            subTitle: 'Post-test loop',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                // height: 700,
                            }
                        },
                        views: [{
                            name: 'm-text',
                            big: true,
                            title: 'Cycle',
                            text: ['- it is a repeated sequence of actions.',
                                'Sequence of actions that are repeated within the cycle is called cycle body. One pass through th cycle is called iteration. Variables that are changed within the cycle, and which influence on its termination are called cycle parameters.']
                        },
                            /*   {
                                      name: 'm-video',
                                      // src: 'public/1/nature.mp4',
                                      isImage: true,
                                      // bg: 'public/1/v1.png',
                                      // backgroundColor: '#cbe7ff',
                                  }, */
                            {
                                name: 'm-text', big: true,
                                title: 'You need to remember',
                                text: ['You need to remember the following when writing cyclic algorithms:',
                                    '<b>First</b>, the body content of a cycle must influence on the cycle condition in order to give an opportunity for the cycle to terminate.',
                                    '<b>Second</b>, condition of the cycle must compose the correct expressions and values that are idetified prior to the first performance of the cycle body.']
                            }, /*
                         {
                            name: 'm-video',
                            // src: 'public/1/nature.mp4',
                            isImage: true,
                            // bg: 'public/1/v1.png',
                            // backgroundColor: '#cbe7ff',
                        },
                        */ {
                                name: 'm-text', big: true,
                                text: ['What is the key action of this video segment? Is it considered as a cycle? Why?' +
                                'If you may answer to these questions, so you are a part of the world of programming!',
                                    'But, if there are questions that haven`t been answered, let us try to find the answer to them together!,',
                                    'You already know that the cycle is applied in programming when it is required to repeat a definite sequence of actions. Several cycle types are used to solve the problems: for loop, pre-test loop, post-test loop.']
                            }, [{
                                name: 'm-image',
                                height: '450px',
                                src: 'public/1/s1_en.png',
                            }, {
                                name: 'm-image',
                                height: '360px',
                                src: 'public/1/s2_en.png',
                            }, {
                                name: 'm-image',
                                src: 'public/1/s3_en.png',
                            }], {
                                name: 'm-text', big: true,
                                title: 'Repeat …Until',
                                text: ['The cycle type which is used the most frequently in the solution of the problems is a for loop. It is used if we know the number of repetitions. If we do not know the number of repetitions, we will use a pre-test loop. There is one more type of cycle with which you are going to get acquainted!',
                                    'Post-test loop (Repeat Until)',
                                    'For example:',
                                    'It is read as follows: Repeat to allocate а+1 to y until а+2 is more that 10.']
                            }, [{
                                name: 'm-image',
                                height: '540px',
                                src: 'public/1/r_en.png'
                            }, {
                                name: 'm-text', big: true,
                                title: 'Operator`s work repeat,',
                                text: ['1. Cycle <b>body</b> is being performed;',
                                    '2. The <b>condition</b> of the cycle exit is being checked; (Therefore, the cycle is performed at least once)',
                                    '3. If the condition is false, then <b>shift</b> to p.1;',
                                    '4. If the condition is true, the <b>exit</b> from the cycle will happen.']
                            }], {
                                name: 'm-text', big: true,
                                text: ['There are some points you need to pay <b>attention</b> to:',
                                    '<b>Firstly</b>, post-test loop body is performed until the <b>condition is false</b>.',
                                    '<b>Secondly</b>, if there are several actions which are included to the cycle body, you do not need to put them in the operator brackets <b>BEGIN END</b> – reserved words <b>REPEAT UNTIL</b> make up analogous block themselves.' +
                                    '<b>Thirdly</b>, post-test loop is always performed at least <b>once</b>! However, upon the incorrectly formulated condition, the cycle becomes <b>"eternal"</b>.']
                            }, {
                                name: 'm-text',
                                title: 'Syntax',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }]
                    }
                }
            },
            {
                title: 'How does the cycle work?',
                info: 'Demonstration of the work of the cycle within the program written in the language of programming',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'How does|the cycle work|within the program?',
                            subTitle: 'Post-test loop',
                            bg: {
                                parallax: 'public/2/bg.jpg',
                                // video: 'public/video4.mp4',
                                // height: 400,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Every computer programmer determines her/his way of realization when solving the problem. When doing so, it is necessary to take into account the following:',
                                    '<ol><li>Program code should not contain "odd" actions, i.e. to exclude redundancy of actions in the code.</li>' +
                                    '<li>To facilitate the achievements of the results, i.e. the goal.</li>' +
                                    '<li>The solution obtained is not the only one possible.</li>' +
                                    '</ol>',
                                    'Thus, one and the same problem can be solved by applying several methods, i.e. you may use one of the cycle you have learned!',
                                    'Let us consider the following solution as an example: to deduce the squares of the numbers below 10.' +
                                    'To begin, you need to open Delphi or Lazarus, and create a new project.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/buttonlabel.png',
                            }, {
                                name: 'm-text',
                                big: true,
                                title: 'Step 1',
                                backgroundColor: '#cbe7ff',
                                text: ['To place the components <b>Button</b> and <b>Label</b> on the form:']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: 'Step 2',
                                backgroundColor: '#cbe7ff',
                                text: ['To create the procedure <b>OnClick</b> on the button, and to enter the variable <b>I</b> of the <b>Integer</b> type']
                            }, {
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<span>var <span class="font300 black--text">I</span>:integer;</span>' +
                                '<br><span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">// ...</span>' +
                                '<br><span>end;</span></div>'
                            }], [{
                                name: 'm-text',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span>begin</span>' +
                                '<br><span class="green--text text--darken-2 font300">//We allocate a unit</span>' +
                                '<br><span class="font300 black--text mr-1 ml-1">I:=1;</span>' +
                                '<br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                title: 'Step 3',
                                backgroundColor: '#cbe7ff',
                                text: ['To fix the value of the variable <b>I</b> equal to <b>1</b> between the key words <b>begin</b> and <b>end</b>: I:=1;']
                            }], [{
                                name: 'm-text',
                                big: true,
                                title: 'Step 4',
                                backgroundColor: '#cbe7ff',
                                text: ['To write the cycle with the condition <b>I>=10</b>, i.e. until <b>I</b> is equal 10, the cycle will be performed. If <b>I>= 10</b>, the cycle will be terminated.']
                            }, {
                                name: 'm-text',
                                big: true,
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<span class="green--text text--darken-2 font300">//perform until</span>' +
                                '<br><span>Repeat</span>' +
                                '<br><span class="font300 green--text text--darken-2">//we add a unit</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<br><span class="font300 green--text text--darken-2">//we deduce the square of the value I</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//until i>=10</span>' +
                                '</div>'
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'The program code',
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//We allocate a unit</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//perform until</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we add a unit</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we deduce the square of the value I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//until i>=10</span>' +
                                '<br><br><span>end;</span></div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['For seeing how the loop works step-by-step.',
                                    'Finish spelling after row: <b>Label1.Caption:=IntToStr(a);</b>',
                                    'These are two rows',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    '<b>Application.HandleMessage</b> - is a method, allowing to display a value of variables during the loop work. Even though we display variable at label, this method is necessary.',
                                    '<b>sleep(100)</b> - this function states to the program that it is need to sleep like freezing on some quantity of millisecond. Millisecond is mentioned in brackets. Second has 1000 millisecond.'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font300 black--text">I:=1;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//We allocate a unit</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//perform until</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we add a unit</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we deduce the square of the value I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//until i>=10</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['In order to demonstrate that the cycle was performed only once, it is required to allocate the initial value of the variable I to be equal to 10.',
                                    'The program code is going to be as follows:'],
                                extra: '<div class="font700 display-1 light-blue--text text--darken-3">' +
                                '<p>procedure <span  class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span></p>' +
                                '<p>var <span class="font300 black--text">I</span>:integer;</p>' +
                                '<p>begin</p>' +
                                '<span class="font700 black--text">I:=10;</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//We allocate 10</span>' +
                                '<br><span>Repeat</span>' +
                                '<span class="ml-2 green--text text--darken-2 font300">//perform until</span>' +
                                '<br><span class="font300 black--text">I:=I+1;</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we add a unit</span>' +
                                '<br><span class="font300 black--text">Label1.Caption:=IntToStr(sqr(i));</span>' +
                                '<span class="ml-2 font300 green--text text--darken-2">//we deduce the square of the value I</span>' +
                                '<br><span>Until</span><span class="font300 ml-2 black--text">i>=10;</span>' +
                                '<span class="font300 green--text text--darken-2">//until i>=10</span>' +
                                '<br><label class="font500 black--text">Application.ProcessMessages;</label>' +
                                '<br><label class="font500 black--text">sleep(100);</label>' +
                                '<br><br><span>end;</span></div>'
                            },
                        ]
                    }
                }
            },
            {
                title: 'Analyze',
                image: 'part3.png',
                info: 'Perform the task, and determine your knowledge level',
                interactive:
                    {
                        name: 'input-test',
                        items: {
                            title: 'Perform the task, and determine your knowledge level',
                            excesses: {
                                data: [{
                                    question: 'Will the cycle be repeated if the condition is true?',
                                    variants: ['No, it is the condition for the exit of the cycle',
                                        'Yes, the work of the cycle will be repeated',
                                        'Yes, if the condition for the continuation is true',
                                        'Yes, if the condition for the continuation is false']
                                }, {
                                    question: 'What is the difference between the cycle while and the cycle repeat?',
                                    variants: ['The cycle while is with the pre-test, while the cycle repeat is with the post-test',
                                        'The cycle while is with the post-test, while the cycle repeat is with the pre-test',
                                        'The cycle while is with the parameter, while the cycle repeat is with the post-test',
                                        'The cycles while and repeat are the cycles with the condition']
                                }]
                            },
                            title2: 'What will be the value of the variable "y" after the execution of the program:',
                        }
                    }
            }
        ]
    },
}