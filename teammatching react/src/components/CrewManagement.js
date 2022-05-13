export default function CrewManagement({$main, initialState, onClick}){
    this.state = initialState;
    this.onClick = onClick;
    this.$target = `<section>crewmanage</section>`
    
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        if(this.state.tab === 'crew-tab'){
            $main.innerHTML = this.$target;
            ;
        }
    }

    this.render();
}