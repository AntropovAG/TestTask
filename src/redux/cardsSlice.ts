import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../utils/interfaces";


interface CardsState {
    cards: Card[];
    displayedCards: Card[];
    filter: string
}

const initialState: CardsState = {
    cards: [],
    displayedCards: [],
    filter: 'all'
};

export const fetchCards = createAsyncThunk<Card[], void, {rejectValue: string}>(
    'cards/fetchCards',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://boringapi.com/api/v1/photos/?page=1&limit=10')
            if (!response.ok) {
                throw new Error('Ошибка сервера')
            }
            const data = await response.json();
            return data.photos.map((card: any) => ({
                ...card,
                isLiked: false
            }))
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Ошибка')
        }
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        deleteCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(card => card.id != action.payload)
            state.displayedCards = state.filter === "liked"
            ? state.cards.filter((card) => card.isLiked === true)
            : [...state.cards];
        },
        setLike: (state, action: PayloadAction<number>) => {
            const card = state.cards.find(card => card.id === action.payload);
            if(card) {
                card.isLiked = !card.isLiked
            }
            if (state.filter === "liked") {
                state.displayedCards = state.cards.filter((card) => card.isLiked === true)
                } else {
                    state.displayedCards = state.cards
                }
        },
        filterCards: (state) => {
            if (state.filter === "liked") {
            state.displayedCards = state.cards.filter((card) => card.isLiked === true)
            } else {
                state.displayedCards = state.cards
            }
        },
        createCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload)
            state.displayedCards = state.filter === "liked"
            ? state.cards.filter((card) => card.isLiked === true)
            : [...state.cards];
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
            state.cards = action.payload;
            state.displayedCards = state.filter === "liked"
            ? state.cards.filter((card) => card.isLiked === true)
            : [...state.cards];
        }
    )
    .addCase(fetchCards.rejected, (state, action) => {
        console.log("rejected")
        //Можно добавить обработку ошибок
    })
    .addCase(fetchCards.pending, (state, action) => {
        console.log("loading")
        //Можно добавить обработку загрузки (лоадер и т.п.)
    })
    }
});

export const {deleteCard, setLike, filterCards, createCard, setFilter} = cardsSlice.actions;
export default cardsSlice.reducer;

