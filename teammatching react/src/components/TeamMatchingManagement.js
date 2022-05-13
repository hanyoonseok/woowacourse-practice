export default function TeamMatchingManagement({$main, initialState, onRadioClick}){
    this.state = initialState;
    this.$target = '<section>teammatching</section>'
    this.onRadioClick = onRadioClick;
    
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }
    
    this.render = () => {
        if(this.state.tab === 'team-tab'){
            $main.innerHTML = this.$target;
           
        }
    }

    this.render();
}