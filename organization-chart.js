const chart = (org, tab = 0) => {
    if (Array.isArray(org)) {
        org.forEach(name => console.log(`${`\t`.repeat(tab)}${name}`))
    } else {
        Object.keys(org).forEach(key => {
            console.log(`${`\t`.repeat(tab)}${key}`);
            chart(org[key], tab + 1)
        });
    }
};

const organization = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: [
                'Steve',
                'Kyle',
                'Andra',
            ],
            Zhao: [
                'Richie',
                'Sofia',
                'Jen',
            ],
        },
        Schrage: {
            VanDyck: [
                'Sabrina',
                'Michelle',
                'Josh',
            ],
            Swain: [
                'Blanch',
                'Tom',
                'Joe',
            ],
        },
        Sandberg: {
            Goler: [
                'Eddie',
                'Julie',
                'Annie',
            ],
            Hernandez: [
                'Rowi',
                'Inga',
                'Morgan',
            ],
            Moissinac: [
                'Amy',
                'Chuck',
                'Vinni',
            ],
            Kelley: [
                'Eric',
                'Ana',
                'Wes',
            ]
        }
    }
}

chart(organization);
