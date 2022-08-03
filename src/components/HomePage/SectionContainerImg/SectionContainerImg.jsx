import './SectionContainerImg.css'
import img from './img/img.png'

const SectionContainerImg = () =>{
  return(
    <section className='sectionHome'>
      <div className='um'>
        <div className='dois'>
          <div className='tres'>
            <div className="imagemHome">
                <img src={img} alt="" className='imgHome'/>
             </div>
          </div>
        </div> 
        
      </div>
    </section>
  )
}
export default SectionContainerImg