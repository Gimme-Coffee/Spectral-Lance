import GameState from './state';

export default class Stack {
    stack: GameState[] = [];

    push(state: GameState) {
        this.stack.push(state);
    }

    pop() {
        this.stack[this.stack.length - 1].exit();
        this.stack.pop();
    }

    clear() {
        this.stack = [];
    }

    render() {
        this.stack.forEach((state) => {
            state.render();
        });
    }

    update() {
        this.stack[this.stack.length - 1].update();
    }
}
