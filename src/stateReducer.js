export default function (currentState, action) {
    switch (action.type) {
        case "addEntry":
            const journalEntry = { cat_id: action.cat_id, text: action.text }
            return {
                ...currentState,
                entries: [journalEntry, ...currentState.entries]
            }
    }
}
