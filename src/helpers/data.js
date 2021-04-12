const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const exp = () => {
    return random(['1 year', '2 year', '2.5 year', '10 year', '11 year']);
};

const city = () => {
    return random(['Delhi', 'Mumbai', 'Chennai']);
};

const designer = () => {
    return random([
        'Anwesha Sinha',
        'Asfa Sah',
        'Vivek',
        'Aishwarya Roy',
        'Anjali Kumari',
        'Bhawna Milinda',
        'Kunika Verma',
        'Riddhi Dutta',
        'Akshat Jha',
        'Ruhi Chawla'
    ]);
};

const skill = () => {
    return random([
        'JavaScript',
        'PHP',
        'GO',
        'MERN Stack',
        'GraphQl',
        'NodeJs'
    ]);
};

const salary = () => {
    return (Math.random() * 1000).toFixed(2);
};

function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentColor = city();
        const currentSize = exp();
        const currentType = skill();
        const currentDesigner = designer();
        const currentPrice = salary();

        data.push({
            name: `${currentDesigner} ${currentType} ${currentColor} ${currentSize}`,
            color: currentColor,
            size: currentSize,
            designer: currentDesigner,
            type: currentType,
            price: currentPrice,
            salesPrice: currentPrice * .8
        });
    }
    return data;
}

export default generate;
