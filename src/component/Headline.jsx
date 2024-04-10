import './Headline.css'

function Headline(props){
    return(
        <div>
            <div className='heading'>
            <hr /><span className='spanclass'>{props.text}</span><hr />
            </div>
        </div>
    )
}
export default Headline

