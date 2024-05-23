
function div_content_generate() {
    const paragraph = []

    for(let i = 0; i <20; i++ ){
        paragraph.push(<div style={{
        width: '96%', 
        height: '50px', 
        backgroundColor: 'white', 
        borderRadius: '20px',
        margin: '10px'
        }} key={i}></div>)
    };
    return(
        paragraph
    );
};

export default div_content_generate;