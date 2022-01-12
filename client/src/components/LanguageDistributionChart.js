import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, BarElement, CategoryScale } from 'chart.js'
// import randomColor from 'randomcolor'
import randomer from 'complete-randomer'

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, BarElement, CategoryScale)

const languageColors = {
    'JS': '#fb0',
    'Dart': '#09f',
}

const genRandColors = (labels) => {
    const bgColors = []
    const borderColors = []

    for (let i = 0; i < labels.length; i++) {

        // if(labels[i] in languageColors) {
        //     bgColors.push(languageColors[labels[i]] + '99')
        //     borderColors.push(languageColors[labels[i]])
        // } else {
        //     bgColors.push(randomColor() + '99')
        //     borderColors.push(randomColor())
        // }
        
        // const randClr = randomColor()
        const randClr = randomer.COLOR.HEX()

        bgColors.push(randClr + '99')
        borderColors.push(randClr)

    }

    return {bgColors, borderColors}
}

const labels = ['JS', 'C++', 'Dart', 'Python', 'Java', 'Kotlin', 'TypeScript', 'HTML', 'CSS', 'SASS']

const data = {
    labels,
    datasets: [
        {
            id: 1,
            label: 'Mostly used',
            // backgroundColor: '#6a26cd',
            // backgroundColor: '#3C096C',
            // borderWidth: 1,
            // borderColor: '#111',
            // borderColor: genRandColors(labels).borderColors,
            borderRadius: 5,
            backgroundColor: genRandColors(labels).bgColors,
            data: [
                716 ,
                833 ,
                363 ,
                843 ,
                843 ,
                804 ,
                696 ,
                707 ,
                22  ,
                595 ,
            ]
        },
    ]
}

const options = {
    indexAxis: 'y',
    title: {
        display: true,
        text: 'Top languages used',
        fontSize: 20
    }
}


const LanguageDistributionChart = () => {
    
    return (
            <Bar data={data} options={options} />
    )
}

export default LanguageDistributionChart