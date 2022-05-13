import Header from "./components/Header.js";
import CrewManagement from "./components/CrewManagement.js";
import TeamMatchingManagement from "./components/TeamMatchingManagement.js";

export default function app($app){
    this.state = {
        frontCrew:[],
        backCrew:[],
        tab:'crew-tab',
        frontStatus:{crewAdd:false, crewList:false},
        backStatus:{crewAdd:false, crewList:false},
    }

    this.$main = document.createElement('main');
    
    const crewMgr = new CrewManagement({
        $main : this.$main,
        initialState : {
            frontCrew : this.frontCrew,
            backCrew : this.backCrew,
            tab:this.tab,
        }
    })
    
    const teamMathcingMgr = new TeamMatchingManagement({
        $main : this.$main,
        initialState : {
            frontCrew : this.frontCrew,
            backCrew : this.backCrew,
            tab:this.tab,
        }
    })
    
    
    this.setState = nextState => {
        this.state = nextState;
        crewMgr.setState({
            frontCrew : this.state.frontCrew,
            backCrew : this.state.backCrew,
            tab:this.state.tab,
        })
        teamMathcingMgr.setState({
            frontCrew : this.state.frontCrew,
            backCrew : this.state.backCrew,
            tab:this.state.tab,
        })
        //컴포넌트들의 setstate 호출
    }
    
    const init = () => {
        $app.innerHTML = `
        <header>
            <h1>우테코 크루와 팀 매칭 관리 보드</h1>
            <nav>
            <ul>
                <li>
                <button id="crew-tab">크루 관리</button>
                </li>
                <li>
                <button id="team-tab">팀 매칭 관리</button>
                </li>
            </ul>
            </nav>
        </header>
        `
        $app.appendChild(this.$main);

            document.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', (e)=>{
                this.setState({
                    ...this.state,
                    tab : btn.id
                });
            })
        })
    }

    init();
}