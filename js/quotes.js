const quotes = [
    {
        quote: "신세계의 신이 되는거다!",
        author: "우왁굳",
    }, {
        quote: "노력과 재능보다 중요한건 알잘딱깔센이다.",
        author: "우왁굳",
    }, {
        quote: "제발 니들 인생에 훈수하세요.",
        author: "우왁굳",
    }, {
        quote: "지 혼자 사랑하고 지 혼자 울고 그러다가 화가 나. 이건 지금 정신이 병이 든 거야. 진지하게 들어, 애들아. 정신병이야 임마!",
        author: "우왁굳",
    }, {
        quote: "퇴물이라는 말은 네가 있어야 할 곳이 거기가 아니라는 말이다. 문제삼아서 문제가 되는 거다.",
        author: "우왁굳",
    }, {
        quote: "그렇게 득실을 따지는 것도 좋지만 그렇게 득실만 따지다가 평생 백수된다? 나아갈 수가 없어. 득실만 따지다가는.",
        author: "우왁굳",
    }, {
        quote: "살다보면 언젠가 좋은 날이 오겠죠.",
        author: "우왁굳",
    }, {
        quote: "깨지고 부서져라.",
        author: "우왁굳",
    }, {
        quote: "승리의 키가 나한테 있잖아. 나만 잘하면 되잖아. 그래서 포기 안 할 거야.",
        author: "우왁굳",
    }, {
        quote: "키보드로 누굴 지키지 마세요. 키보드로는 누구도 지킬 수 없습니다. 개미새끼 하나도 지킬 수 없어요.",
        author: "우왁굳",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;