import "./Home.css"
import { useBrowser } from "../../context/browser-context"
import { type } from "@testing-library/user-event/dist/type";

export const Home = () => {
    const {name,browserDispatch}=useBrowser();
    const handleNameChange=(event)=>{
        if(event.key === "Enter" && event.target.value.length >0){
            browserDispatch({
                type:"NAME",
                payload:event.target.value
            }
            )
            localStorage.setItem("name",event.target.value)
        }
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
    }
    return (
        <div className="home-container d-flex direction-column align-center gap-lg">
            <h1 className="main-heading">Browser Extensions</h1>
            <div className="user-details d-flex direction-column gap">
                <span className="heading-1">Hello! what's Your Name ?</span>
                <form onSubmit={handleFormSubmit}>
                    <input required className="input" onKeyPress={handleNameChange} />
                </form>

            </div>
        </div>
    
    )
}