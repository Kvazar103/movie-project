import {useForm} from "react-hook-form";
import css from "./Header.module.css";


const Header=()=>{

const {register,handleSubmit}=useForm()
    
    const submit =async (data) => {
      
    }
    
    return(<div>
       <form onSubmit={handleSubmit(submit)}>
           <input type="text" placeholder={"enter the film"} {...register('film')}/>
       </form>
        <div id="main">
            <button onClick={()=>{
                let element=document.getElementById("main")
                element.classList.toggle(css.HeaderBlack)

            }}>change color</button>
        </div>

    </div>)
}

export {
    Header
}