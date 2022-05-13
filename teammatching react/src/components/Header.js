export default function TeamMatchingManagement({$main, initialState, onClick}){
    this.state = initialState;
    this.onClick = onClick;
    this.$target = document.createElement('header');
    $main.appendChild(this.$target);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        
    }

    this.$target.addEventListener('click', (e)=>{
        const $tabBtn = e.target.closest("button");

        if ($tabBtn.id === 'crew-tab' || $tabBtn.id === 'team-tab') {
            this.onClick($tabBtn.id);
        }
    })

    this.render();
}