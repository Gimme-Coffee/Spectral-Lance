export default interface GameState {
    update: () => void;
    render: () => void;
    exit: () => void;
}
