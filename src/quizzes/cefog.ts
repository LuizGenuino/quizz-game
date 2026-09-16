// ============================================================
// 🍔 QUIZ: CLIENTE B (ex.: restaurante) — rota: /cliente-b
// Exemplo SEM tela de dificuldade e COM tela de categoria.
// ============================================================]
import LogoImg from '../assets/logo-cfm.webp'
import { QuizConfig } from '../types/quiz.types';
export const CEFOG: QuizConfig = {
    slug: 'cefog',
    brandName: 'CEFOG',
    brandIcon: '',

    showDifficultyScreen: false,   // pula a tela de dificuldade
    showCategoryScreen: true,
    defaultDifficulty: 'easy',     // usa está dificuldade automaticamente

    texts: {
        gameLogo: LogoImg,
        gameTitle: 'CEFOG',
        gameSubtitle: 'Curso de Formação de Oficiais e Graduados',
        startButton: 'Iniciar Jogo',
        difficultyTitle: 'Escolha a Dificuldade',
        categoryTitle: 'Escolha sua Categoria',
        confirmButton: 'Confirmar',
        nextButton: 'Próxima Pergunta',
        question: 'Pergunta',
        of: 'de',
        score: 'Pontos',
        timeLeft: 'Tempo',
        correctFeedback: 'Correto! 🎉',
        wrongFeedback: 'Errado!',
        timeoutFeedback: 'Tempo esgotado! ⏰',
        resultsTitle: 'Resultado Final',
        perfectMessage: 'Perfeito! Você gabaritou! 🏆',
        goodMessage: 'Muito bem! Ótimo desempenho! 👏',
        tryAgainMessage: 'Não foi nessa vez! Tente de Novo! 👎',
        playAgain: 'Jogar Novamente',
        exit: 'Sair',
        back: '← Voltar',
    },

    colors: {
        bgGradient: 'from-slate-950 via-blue-950 to-cyan-950',
        primary: 'from-amber-500 to-orange-600',
        danger: 'from-red-500 to-rose-600',
        correct: 'from-emerald-500 to-teal-600',
        wrong: 'from-red-500 to-rose-600',
    },

    difficulties: {
        easy: { label: 'Fácil', icon: '😊', color: 'from-emerald-500 to-teal-600', timePerQuestion: 30, questionsPerGame: 10, pointsPerQuestion: 10 },
        medium: { label: 'Médio', icon: '🤔', color: 'from-amber-500 to-orange-600', timePerQuestion: 20, questionsPerGame: 10, pointsPerQuestion: 20 },
        hard: { label: 'Difícil', icon: '🔥', color: 'from-red-500 to-rose-600', timePerQuestion: 10, questionsPerGame: 10, pointsPerQuestion: 30 },
    },

    categories: [
        {
            id: 'monitor',
            name: 'Monitor',
            icon: '🛡️', // ou '🛡️'
            color: 'from-emerald-600 to-teal-700',
            questions: [
                {
                    question: 'O QUE É ORDEM UNIDA?',
                    options: [
                        'A Ordem Unida se caracteriza por uma disposição apenas individual e consciente altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sincronização, dada por vários comandantes.',
                        'A Ordem Unida se caracteriza por uma disposição individual e consciente altamente desmotivada, para a obtenção de determinados padrões coletivos de sem uniformidade, e sem sincronização e garbo militar.',
                        'A Ordem Unida se caracteriza por uma disposição somente individual e consciente altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sem sincronização e garbo militar.',
                        'A Ordem Unida se caracteriza por uma disposição individual e coletiva, altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sincronização e garbo militar, dado por um só comando.'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'COMO É A DIVISÃO DAS VOZES DE COMANDO NA ORDEM UNIDA?',
                    options: [
                        'Voz de comando propriamente dito;',
                        'Voz de execução;',
                        'Voz de advertência, Voz de comando propriamente dito e Voz de execução;',
                        'Voz de advertência;'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'DEFINA O CONCEITO DE COLUNA BASE NA ORDEM UNIDA?',
                    options: [
                        'Coluna se caracteriza por uma coluna atrás da outra;',
                        'Coluna base se caracterizam por ser a extremidade da direita e a testa;',
                        'Moral, indisciplina, Espírito de corpo e improficiência;',
                        'Moralidade, Disciplinaridade, Espírito de corpo e Proficiência'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'ASSINALE A ALTERNATIVA CORRETA SOBRE O CENTRO NA ORDEM UNIDA?',
                    options: [
                        'Centro é o meio do pelotão;',
                        'Centro se caracteriza pelos integrantes que estão na extremidade da esquerda e testa;',
                        'Centro se caracteriza pelos integrantes que não compõe a extremidade da esquerda, extremidade da direita, retaguarda nem testa;',
                        'Centro é o centro;'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'O QUE É DISCIPLINA?',
                    options: [
                        'A disciplina é a força principal dos exércitos. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a subordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.',
                        'A disciplina é a força principal dos exércitos. A disciplina, no sentido militar, é o predomínio da desordem e da não obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a subordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.',
                        'A disciplina é a força principal dos exércitos. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a insubordinação involuntária do indivíduo à missão do conjunto, do qual faz parte.',
                        'A disciplina não é a força principal dos Guardas Mirins. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a subordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'ASSINALE A CORRETA ?',
                    options: [
                        'Se tratando de linhas e fileiras as duas se caracteriza por um ao lado do outro, porém fileiras pode se ter várias e linhas apenas uma;',
                        'Se tratando de linhas e fileiras as duas se caracteriza por um ao lado do outro, porém fileiras pode se ter uma e linhas apenas uma;',
                        'Se tratando de linhas e fileiras as duas se caracteriza por um ao lado do outro, porém fileiras pode se ter várias e linhas várias também;',
                        'Se tratando de linhas e fileiras as duas se caracteriza por uma atrás do outro, porém fileiras pode se ter várias e linhas apenas uma;'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'ASINALE A ALTERNATIVA INCORRETA SOBRE O HOME BASE?',
                    options: [
                        'O homem base se encontra na retaguarda;',
                        'O homem base se encontra na testa e na extremidade da direita;',
                        'O homem base é responsável pela cadência da tropa;',
                        'O homem base é responsável pelo alinhamento e cobertura da tropa;'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'COMO É FORMADA A ESCALA HIERÁRQUICA DA GUARDA MIRIM?',
                    options: [
                        'A hierarquia da CF obedecerá a mesma hierarquia da Polícia Militar do Estado do Mato Grosso, com as seguintes nomenclaturas: AL CF, SD CF, MON CF, CABO CF, 1º SARGENTO CF, 2º SARGENTO CF, 3º SARGENTO CF, SUB-TENENTE CF, 1º TENENTE CF, 2º TENENTE CF, CAPITÃO CF, MAJOR CF, TENENTE-CORONEL CF e CORONEL CF.',
                        'A hierarquia da CF obedecerá a mesma hierarquia da Polícia Militar do Estado do Mato Grosso, com as seguintes nomenclaturas: AL CF, SD CF, MON CF, CABO CF, 3º SARGENTO CF, 2º SARGENTO CF, 1º SARGENTO CF, SUB-TENENTE CF, 2º TENENTE CF, 1º TENENTE CF, CAPITÃO CF, MAJOR CF, TENENTE-CORONEL CF e CORONEL CF.',
                        'A hierarquia da CF obedecerá a mesma hierarquia da Polícia Militar do Estado do Mato Grosso, com as seguintes nomenclaturas: AL CF, SD CF, MON CF, CABO CF, 3º SARGENTO CF, 2º SARGENTO CF, 1º SARGENTO CF, CAPITÃO CF, SUB-TENENTE CF, 2º TENENTE CF, 1º TENENTE CF, MAJOR CF, TENENTE-CORONEL CF e CORONEL CF.',
                        'A hierarquia da CF obedecerá a mesma hierarquia da Polícia Militar do Estado do Mato Grosso, com as seguintes nomenclaturas: AL CF, SD CF, MON CF, CABO CF, 3º SARGENTO CF, 2º SARGENTO CF, 1º SARGENTO CF, SUB-TENENTE CF, 2º TENENTE CF, 1º TENENTE CF, CAPITÃO CF, MAJOR CF, CORONEL CF e TENENTE-CORONEL CF .'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'SOBRE OS OBJETIVOS DA ORDEM UNIDA, ASSINALE A INCORRETA:',
                    options: [
                        'Proporcionar aos homens e às unidades, os meios de se apresentarem, e de se deslocarem em perfeita ordem, em todas as circunstâncias estranhas ao combate.',
                        'Desenvolver o sentimento de coesão e os reflexos de obediência, como fatores preponderantes na formação dos soldados.',
                        'Não constituir uma verdadeira escola de disciplina.',
                        'Treinar oficiais e graduados no comando da tropa.',
                        'Possibilitar, consequentemente, que a tropa se apresente em público, quer nas paradas, quer no simples deslocamento de serviço, com aspecto energético e marcial.'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'MARQUE A ALTERNATIVA CORRETA SOBRE O CONCEITO DE TESTA:',
                    options: [
                        'Testa são as menores pessoas de um pelotão;',
                        'Testa são as maiores pessoas que compõe um pelotão;',
                        'Testa ficam nas extremidades da direita, formando uma coluna por um;',
                        'Em um pelotão não existe as testas;'
                    ],
                    correctIndex: 1
                }
            ]
        },
        {
            id: 'sargento-tenentes',
            name: 'Sargentos & Tenentes',
            icon: '⚔️', // ou '⚔️'
            color: 'from-blue-700 to-indigo-900',
            questions: [
                {
                    question: 'SOBRE O INCIO DA GUARDA MIRIM, EM BASE NA APOSTILA FORNECIDA PARA ESTUDO, ASSINALE A CORRETA:',
                    options: [
                        'O 1º agrupamento da guarda mirim de Colíder foi fundado em 2015, publicado no diário oficial do estado de Mato Grosso em 10 de maio de 2016, com tempo de duração determinado de 10 anos, e a primeira reunião ocorreu em 15 de novembro de 2015.',
                        'O 1º agrupamento da guarda mirim de Colíder "agrupamento Tancredo das neves" sociedade civil sem fim lucrativo foi fundado em 1991, publicado no diário oficial do estado de Mato Grosso em 27 de junho de 1991, com tempo de duração indeterminado, diretamente ligado a Pré-profissionalização da criança e adolescente promovendo se desenvolvimento físico e intelectual. A primeira reunião ocorreu no dia 31 de janeiro de 1991.',
                        'O 1º agrupamento da guarda mirim de Colíder "agrupamento Tancredo das neves" sociedade civil sem fim lucrativo foi fundado em 2000, publicado no diário oficial do estado de Mato Grosso em 27 de junho de 2010, com tempo de duração indeterminado, diretamente ligado a Pré-profissionalização da criança e adolescente promovendo se desenvolvimento físico e intelectual. A primeira reunião ocorreu no dia 31 de janeiro de 2008.',
                        'O 1º agrupamento da guarda mirim de Colíder "agrupamento Tancredo das neves" sociedade civil sem fim lucrativo foi fundado em 2025, publicado no diário oficial do estado de Mato Grosso em 27 de junho de 1991, com tempo de duração indeterminado, diretamente ligado a Pré-profissionalização da criança e adolescente promovendo se desenvolvimento físico e intelectual. A primeira reunião ocorreu no dia 31 de janeiro de 1991.'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'EM RELAÇÃO AO CONCEITO DE ORDEM UNIDA, ASSINALE A ALTERNATIVA INCORRETA:',
                    options: [
                        'A Ordem Unida não se caracteriza por uma disposição individual e consciente altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sincronização e garbo militar. Deve ser considerada, por todos os participantes como um significativo esforço para demonstrar a própria disciplina militar, isto é, a situação de ordem e obediência que se estabelece voluntariamente entre militares, tendo em vista a necessidade de eficiência na guerra.',
                        'A Ordem Unida destina-se exclusivamente à prática de exercícios físicos individuais, não influenciando no desenvolvimento da disciplina, do garbo militar ou do trabalho em equipe.',
                        'A Ordem Unida, não é se caracteriza por uma disposição individual, apenas coletiva e consciente altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sincronização e garbo militar. não deve ser considerada, por todos os participantes como um significativo esforço para demonstrar a própria disciplina militar, isto é, a situação de ordem e obediência que se estabelece voluntariamente entre militares, tendo em vista a necessidade de eficiência na guerra.',
                        'A Ordem Unida se caracteriza por uma disposição individual e consciente altamente motivada, para a obtenção de determinados padrões coletivos de uniformidade, sincronização e garbo militar. Deve ser considerada, por todos os participantes - como um significativo esforço para demonstrar a própria disciplina militar, isto é, a situação de ordem e obediência que se estabelece voluntariamente entre militares, tendo em vista a necessidade de eficiência na guerra.'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'ANALISANDO QUE A DISCIPLINA É A BASE DA INSTITUIÇÃO GUARDA MIRIM, ASSINALE O CONCEITO MAIS CORRETO SOBRE O QUE PODE SE DEFINIR DISCIPLINA:',
                    options: [
                        'A disciplina é a força principal dos exércitos. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a subordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.',
                        'A disciplina é a ausência total de regras e comandos, permitindo que cada indivíduo atue de forma isolada e independente da missão do grupo.',
                        'A disciplina é a força principal dos exércitos. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a insubordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.',
                        'A disciplina é a força principal dos exércitos, fazendo com que todos sejam mal treinados. A disciplina, no sentido militar, é o predomínio da ordem e da obediência, resultante de uma educação apropriada. A disciplina militar é, pois, a obediência pronta, inteligente, espontânea, e entusiástica às ordens do superior. Sua base é a subordinação voluntária do indivíduo à missão do conjunto, do qual faz parte.'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'SOBRE ORDEM UNIDA, DISTÂNCIA  É:',
                    options: [
                        'É a formação de uma tropa cujos elementos (homens, frações ou viaturas) estão colocados na mesma linha, um ao lado do outro, todos voltados para a mesma frente.',
                        'É o espaço entre dois elementos (homens, frações ou viaturas) colocados um atrás do outro e voltados para a mesma frente. Entre duas frações, a distância se mede em passos (ou em metros) contados do último elemento da fração da frente, ao primeiro da seguinte.',
                        'É a velocidade com que a tropa se desloca durante a marcha em uma cerimônia militar.',
                        'É a formação de uma tropa, em que os elementos (homens, frações ou viaturas) são colocados uns atrás dos outros, seguidamente, guardando entre si uma distância regulamentar.'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'SOBRE ORDEM UNIDA, ALINHAMENTO É:',
                    options: [
                        'É o militar pelo qual a tropa regula sua marcha, cobertura e alinhamento.',
                        'É o graduado colocado à retaguarda de uma tropa com a missão de cuidar da correção da marcha e dos movimentos, de exigir que todos se conservem nos respectivos e de zelar pela disciplina.',
                        'É o intervalo lateral medido entre duas viaturas em movimento de comboio.',
                        'É a disposição cujos elementos (homens, frações ou viaturas), ficam em linha reta, voltados para a mesma frente, de modo que um elemento dique exatamente atrás do outro.'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'SOBRE ORDEM UNIDA, VOZES DE COMANDO É:',
                    options: [
                        'são formas padronizadas, pelas quais o comandante de uma fração exprime verbalmente a sua vontade. A voz constitui o meio de comando mais empregado na ordem unida. Deverá ser usada, sempre que possível, pois permite execução simultânea e imediata',
                        'A VOZ;',
                        'são apitos e sinais sonoros utilizados exclusivamente para substituir as ordens de marcha em momentos de silêncio absoluto.',
                        'são formas padronizadas, pelas quais o comandante de uma fração exprime verbalmente a sua vontade. Os gestos constituem o meio de comando mais empregado na ordem unida. não deverá ser usada, sempre que possível, pois permite execução simultânea e imediata'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'SOBRE ORDEM UNIDA, AS VOZES DE COMANDO:',
                    options: [
                        'É O SOM QUE SAI DA BOCA AO FALAR.',
                        'As vozes de comando devem variar conforme o gosto pessoal do comandante de fração, sem necessidade de padronização.',
                        'As vozes de comando devem ser rigorosamente padronizadas, para que a execução seja sempre uniforme',
                        'Os gestos de comando devem ser rigorosamente padronizados, para que a execução seja sempre uniforme,'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'SOBRE A ORDEM UNIDA, ASSINALE A ALTERNATIVA INCORRETA SOBRE VOZ DE EXECUÇÃO:',
                    options: [
                        'tem por finalidade determinar o exato momento que o movimento deve começar ou cessar. A voz de execução deve ser curta, viva, enérgica e segura.',
                        'Quando a voz de execução for constituída por uma palavra oxítona (que tem a tônica na última sílaba), é aconselhável um certo alongamento na enunciação da(s) sílaba(s) iniciais(s), seguido de uma enérgica em missão da sílaba final.',
                        'tem por finalidade determinar o exato momento que o movimento deve de anunciar. A voz de execução deve ser curta, viva, enérgica e segura.',
                        'Quando a voz de execução for constituída por uma palavra oxítona (que tem a tônica na última sílaba), é aconselhável um certo alongamento na enunciação da(s) sílaba(s) iniciais(s), seguido de uma enérgica em missão da sílaba final.'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'NO MANUAL DE INSTRUÇÃO, ASSINALE AS ALTERNATIVAS CORRETAS DE PADRONIZAÇÃO:',
                    options: [
                        'a instrução deverá ter um desenvolvimento gradual, isto é, começar pelas partes mais simples, atingindo, progressivamente, as mais difíceis;',
                        'Nenhuma das alternativas está correta.',
                        'Todas alternativas acima corretas;',
                        'os exercícios deverão ser metódicos, precisos, frequentes e minis- trados em sessões de curta duração. Assim conduzidos, tornar-se-ão de grande valor para o desenvolvimento do autocontrole e do espírito de coesão. Constitui grande erro realizar sessões de Ordem Unida de longa duração'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'A instrução de Ordem Unida deverá ser ministrada segundo os processos descritos abaixo, marque a incorreta:',
                    options: [
                        'Na escolha do local para instrução de ordem unida, o instrutor deverá evitar lugares em que há exposição a ruídos, os quais, além de distrair a atenção do instruindo, dificultam o entendimento dos comandos à voz.',
                        'Os homens serão reunidos para a instrução em turmas pequenas. Estas turmas, sempre que possível, deverão corresponder às frações orgânicas da subunidade, de modo que os mesmos homens sejam sempre confiados aos mesmos instrutores e monitores',
                        'As sessões de instrução devem ser realizadas sem planejamento prévio e com turmas reunindo todo o efetivo de uma só vez, independentemente do espaço disponível.',
                        'Qualquer lugar que couber a tropa.'
                    ],
                    correctIndex: 3
                }
            ]
        },
        {
            id: 'graduados',
            name: 'Teste de Reação dos Graduados',
            icon: '🔰', // ou '🔰'
            color: 'from-red-700 to-rose-900',
            questions: [
                {
                    question: 'Uma criança de 08 anos, passa uma noite muito perturbada com muitas confusões,\nnão dorme direito vem para a entidade muito disperso sua atenção, ao entrar em forma não\nacompanha a instrução. Que atitude o graduado deve ter?',
                    options: [
                        'Ficar gritando alto em seu ouvido chamando atenção;',
                        'Tirar de forma e conversar com presteza para identificar o problema mandar embora;',
                        'Deixar atrapalhar a instrução fazendo de conta que não está vendo nada;',
                        'Tirar de forma e conversar com presteza para identificar o problema junto com um\nresponsável pela disciplina e tomar as providências cabíveis;'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'Na ordem unida prática nas posições (sentido, descansar, firme, cobrir e outros), ao\nensinar essas posições muitos tem dificuldades no aprendizado, faz coisas ao contrário\nmuda perna erradas fica olhando para os lados, dedos aberto. Para corrigir qual atitude a\nser tomada:',
                    options: [
                        'Dar um bonesada nas pernas e braços;',
                        'Usar exclusivamente as palavras e exemplos, para corrigir os erros nunca usar atos de\nviolências ou grosserias não ter contato corporal com subalternos;',
                        'Pegar uma régua ou um pau que é mais forte e acertar onde está errado, para nunca mais\nesquecer os exemplos os dedos abertos;',
                        'Não usar nenhum material apenas dar uns tapinhas soquinhos no cfs que está errado com\ncarinho são crianças;'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'Quando um Cfs está fazendo TFM, correndo e sentindo cansado, como devemos tomar\numa atitude para ajudar:',
                    options: [
                        'Amarrar uma cordinha no pé do Caxias para puxar o mocorongo para puxar o outro;',
                        'Deixar para trás o mocorongo e só levar em frente os Caxias;',
                        'Usar a camaradagem, e reciprocidade e unidos atingir o mesmo objetivo;',
                        'Pegar pelo pescoço sair arrastando, para ajudar não deixar ninguém para trás;'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'Um menor chega com machucado, sangrando, com dores, fica quieto entra em forma.\nQual atitude tomar?',
                    options: [
                        'O graduado deve avaliar a situação, retirar de forma e imediatamente, pois não tem\ncondição de fazer as atividades e tomar as providências cabíveis;',
                        'Faz de conta que não está vendo, militar preciso ser forte e deixa ele agir naturalmente;',
                        'O graduado deve avaliar a situação, retirar de forma e mandar embora imediatamente, pois\nnão tem condição de fazer as atividades como o menor está com muita dor, assim não vai\ndeixar o menor com dor para esperar falar com o responsável, pois são crianças precisa de\ncuidado especial;',
                        'Tira de forma da lavada com sabão de soda e escova pede para não gritar militar não grita e\nse gritar já ameaça que vai dar soco na boca para calar o "choro";'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'Quando um menor sai para o horário de lanche, se encontra com os demais cfs, um cfs\nacaba trombando em outro CF sem querer e derruba o seu suco, este cfs que teve o suco\nderramado muito nervoso vai até o outro cfs e dá um soco bem forte nele e tira\nsatisfações. O graduado responsável pela turma vê a cena e chega para resolver, quando\ninicia o diálogo acaba recebendo o restinho do suco que estava no copo em sua cara\nque o CF jogou pois está muito nervoso. Que atitude o graduado deve tomar:',
                    options: [
                        'Pegar a cara dele e esfregar aonde o suco pegou na roupa do graduado;',
                        'Cada ser humano é diferente um do outro, este graduado não leva desaforo para casa\ntambém e dá uma surra neste cfs até mesmo para impor o respeito;',
                        'Vai até a cozinha pega um copo de suco e manda na cara dele também, para ele sentir\ncomo e jogar suco na cara de outra pessoa;',
                        'Deve respirar fundo, não agir com a emoção e sim com a razão, retirar os menores do local\ne tomar as providências cabíveis;'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'Em uma instrução normal em sala, um CF do nada levanta e diz: "minha mãe e meu pai\nbrigaram e meu pai tentou matar minha mãe" e começa a chorar". Os cfs novatos sem\nainda entender de ordem começa a rir e chamar ele de chorão. Qual atitude deve ser\ntomada?',
                    options: [
                        'O graduado faz de conta que nada aconteceu aborda situação e da uns grito bem forte para\nmanter a ordem;',
                        'Chama o auxiliar da sala, pedi para o cf com cautela acompanhar ele para tomar as\nprovidências e chama a atenção da sala para não repetir o fato, precisam ter respeito em\ntodas as situações;',
                        'Fica comovido com a situação pedi silêncio e como irmão de farda acaba chorando junto\ncom o Cf, afinal companheiro é companheiro;',
                        'Da rizada junto e diz "e isso mesmo chorão" cala a boca e vamos continuar a instrução;'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'Andando pelos corredores você escuta um CF dizendo a outro assim: "você sabia que\no batatinha roubou um carregador que estava na biblioteca ". Como graduado com a\nreação correta?',
                    options: [
                        'Chama os dois para conversar e resolve como um adulto;',
                        'Procura o comando e diz " senhora o CF Batatinha está sendo acusado de um roubo de\num carregador que estava na biblioteca" estou passando para o sr verificar realmente\naconteceu;',
                        'Não comenta nada a ninguém e faz de conta que não sabe nada, cada um cuida e sua via;',
                        'Chega correndo para o comando e diz " senhora o CF Batatinha roubou carregador que\nestava na biblioteca";'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'Ao sair de Gm você encontra na sua bicicleta um lindo boné, já está escuro, muito tarde e\nchovendo. Qual providência ser tomada?',
                    options: [
                        'Leva para casa e fica quieto você olhou para os lados não viu ninguém olhando;',
                        'Olha para os lados coloca na outra bicicleta vizinha, já está atrasado não da tempo de\nprocurar saber o que fazer;',
                        'Pega e leva para casa, no outro dia já comunica os responsável pelo fato e as providências',
                        'Catar e jogar no lixo e deixar quieto, não é seu;'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'Você organizando o efetivo para a instrução, depara com um CF não quer nem saber de\nentrar em forma, ele fica correndo, chigando todo mundo, batendo em quem está quieto\nmuito agitado. Você escala uns cfs para ir cuidar deste caso, de repente observa um\nmonte de cfs correndo atrás da criança, e acabam agarrando ele para não correr, você\nchega perto para tentar conversar acalmar a situação, ele muito agitado te dá uma bela\nmordida no braço. Qual atitude a ser tomada?',
                    options: [
                        'dá um tapa da boca bem forte para aprender a respeitar o superior;',
                        'Respira fundo e procura os meios corretos para tomar as providências;',
                        'Olha bem nos olhos dele e carca uma mordida também para ele sentir a mesma dor que\nvocê sentiu;',
                        'Deixa ele quieto e pega ele na saída com seus amigos mostrar que você é valente e\npoderoso;'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'Você está na escala como observador, se depara com um CF fora da sala, chama ele\npede para entrar e acompanhar as atividades, ele se recusa a entrar diz; "você não\nmanda em mim, entro na hora que eu quiser", você nem sabe estou aqui fora ajudando o\ncebolinha". Qual atitude a ser tomada:',
                    options: [
                        'Entra em uma discussão com o CFs, xingando com palavras áspera;',
                        'Olha bem para os olhos dele e diz " você vai se lascar vou acabar com a sua vida";',
                        'Pega pelo braço e se sai arrastando para sala;',
                        'Anota no caderno que o CF não quer participar, e após procura saber com o cebolinha se e\nverifico a missão.'
                    ],
                    correctIndex: 3
                },
                {
                    question: 'Quando estamos no comando uma tropa como devemos nos comportar:',
                    options: [
                        'Ficar sempre na frente na tropa com postura correta dando exemplos aos seus\nsubordinados;',
                        'Ficar andando de um lado para o outro bem rápido para analisar a esperteza na tropa;',
                        'Ficar no meio da tropa entre as extremidades da esquerda e da direita para que todos\nescutam seu comando;',
                        'Se posicionar na retaguarda, onde fica os menores para eles, ver você e escutar seu\ncomando;'
                    ],
                    correctIndex: 0
                },
                {
                    question: 'Em instrução de 2 (duas) horas de comando sem parar, você acaba ficando cansado,\nsua voz e seu físico. Como devemos nos comportar?',
                    options: [
                        'Pede um copo de agua e começa a dar uma conversadinha com o cf que você e mais\namiguinho;',
                        'Senta toda a tropa juntos com eles você senta também, pede um copo de água e muda o\nritmo da instrução',
                        'Encostar em algo, exemplo na estrutura do local para dar uma descansadinha e comandar\nencostado;',
                        'Pegar uma cadeira e sentar, e continuar o comando com a tropa em pé;'
                    ],
                    correctIndex: 1
                },
                {
                    question: 'Na escola você estuda com a CF Alface Americana, e descobre que ela está de paquera\ncom um menino da escola. Qual procedimento correto:',
                    options: [
                        'Dá muito conselho a ela e diz bem claro para com isso se não vou comunicar a guarda\nmirim;',
                        'Como amiga do peito e cumprisse pede para ela arrumar uma paquerinha também;',
                        'Dá muito conselho a ela e diz bem claro, sou GM igual a você e para o bem da disciplina\nestarei comunicando a guarda mirim;',
                        'Apoio a atitude amizade e para isso, zelar dos segredo do amigo'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'Você está graduado, mas não se encontra em nenhuma escala. E começa observar que\njá deu horário da instrução e nem o comando e subcomando apareceu, não sabendo o\nque aconteceu, como reagiria?',
                    options: [
                        'Reúne todos em um local, e deixa a vontade cada um fazer o que quer, pois diz a todos não\ntenho nada a haver com a falta dos superiores;',
                        'Reúne todos em um local e diz: " gente não apareceu ninguém para dar instrução então\npode ir todos embora";',
                        'Fica preocupado: mas age naturalmente, faz todos os procedimentos do dia chamada,\noração, hino e improvisa algo atrativo e construtivo para os cfs, mantendo a ordem e a\ndisciplina, sem deixa a tropa perceber que os superiores não estão na entidade;',
                        'Fica preocupado: mas age naturalmente, faz todos os procedimentos do dia chamada,\noração, hino e improvisa algo atrativo e construtivo para os cfs, mantendo a ordem e a\ndisciplina, lembrando a tropa que os superiores não estão na entidade e se cuidem;'
                    ],
                    correctIndex: 2
                },
                {
                    question: 'Ao terminar o expediente o CF Pimentão Vermelho, vai até a padaria e compra muitos\ndoces e geladinhos com R$ 50,00 (cinquenta), e chega até você e dá um de presente você\naceitaria?',
                    options: [
                        'Não aceitaria, analisaria a situação achando muito estranho um CF com 50 (cinquenta)\nreais gastando tudo com os colegas, e passaria aos setores responsáveis para\nanalisar;',
                        'Sim, adoro geladinho e doces compro quase todos os dias;',
                        'Sim, adoro geladinho e doces compro quase todos os dias, e pediria outro quase não\nobedeceria o pedido diria vou contar e pedir para analisar onde saiu tanto dinheiro;',
                        'Não aceitaria, analisaria a situação achando muito estranho um CF com 50 (cinquenta)\nreais gastando tudo com os colegas, mas ficaria quieto nada haver com dinheiro alheio;'
                    ],
                    correctIndex: 0
                }
            ]
        },
    ],
};
