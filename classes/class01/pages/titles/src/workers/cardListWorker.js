//por padrao temos uma função global chamada onmessage dentro do worker e os dados vem dentro do objeto data.
//postmessage responde quem mandou esse objeto pra mim
onmessage = ({data}) => {
    let counter = 0

    console.log('activating blocking operation...', data.maxItems)
        console.time('blocking-op')
        // blocking function
        // 1e5 = 100.000
        for (; counter < data.maxItems; counter++) console.log('.')
        console.timeEnd('blocking-op')

    postMessage(
        {respose: 'ok', data: counter}
    )
}