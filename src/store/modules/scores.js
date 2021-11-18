const state = {
    playerScore: 0,
    currentPlayerMove: "",
    computerScore: 0,
    currentComputerMove: 0,
    round: 0,
    scoreMessage: "Score",
    gameEnd: false
}

const getters = {
    getPlayerScore: state => state.playerScore,
    getPlayerMove: state => state.currentPlayerMove,
    getComputerScore: state => state.computerScore,
    getComputerMove: state => state.currentComputerMove,
    getRound: state => state.round,
    getScoreMessage: state => state.scoreMessage,
    getGameEnd: state => state.gameEnd
}

const actions = {
    async playGame({ commit, dispatch, getters }, playerMove) {
        if (getters.getRound < 5) {
            const computerMove = await dispatch("computerPlay");
            commit("setPlayerMove", playerMove);
            commit("setComputerMove", computerMove);
            commit("setRound");
            dispatch("scoreCompare", { playerMove, computerMove });
            if (getters.getRound === 5) {
                dispatch("gameEnd");
            }
        }
    },
    async scoreCompare({ dispatch }, moves) {
        const { playerMove, computerMove } = moves;
        let message;
        if (playerMove === computerMove) {
            await Promise.all([dispatch("changeComputerScore"), dispatch("changePlayerScore")]);
            dispatch("changeScoreMessage", "It's a Tie!");
        } else if (playerMove === "rock" && computerMove === "paper") {
            dispatch("changeComputerScore");
        } else if (playerMove === "paper" && computerMove === "scissors") {
            dispatch("changeComputerScore");
        } else if (playerMove === "scissors" && computerMove === "rock") {
            dispatch("changeComputerScore");
        } else {
            dispatch("changePlayerScore");
        }
        return message;
    },
    computerPlay() {
        const options = ["rock", "paper", "scissors"];
        const randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    },
    changePlayerScore({ commit, dispatch }) {
        dispatch("changeScoreMessage", "Player Wins!");
        commit("setPlayerScore");
    },
    changeComputerScore({ commit, dispatch }) {
        dispatch("changeScoreMessage", "Computer Wins!");
        commit("setComputerScore");
    },
    changeScoreMessage({ commit }, message) {
        commit("setScoreMessage", message);
    },
    gameEnd({ commit }) {
        commit("setGameEnd");
    },
    resetScores({ commit }) {
        commit("setReset");
    }
}

const mutations = {
    setPlayerScore(state) {
        state.playerScore++;
    },
    setPlayerMove(state, payload) {
        state.currentPlayerMove = payload;
    },
    setComputerScore(state) {
        state.computerScore++;
    },
    setComputerMove(state, payload) {
        state.currentComputerMove = payload;
    },
    setScoreMessage(state, payload) {
        state.scoreMessage = payload;
    },
    setRound(state) {
        state.round++;
    },
    setGameEnd(state) {
        state.gameEnd = true;
    },
    setReset(state) {
        state.playerScore = 0;
        state.currentPlayerMove = "";
        state.computerScore = 0;
        state.currentComputerMove = 0;
        state.round = 0;
        state.scoreMessage = "Score";
        state.gameEnd = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}