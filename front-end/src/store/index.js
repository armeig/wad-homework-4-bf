// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        /*
        postList:[
            {id: 1, account: "@catLover123", postDate: "12.12.2023", PostText: "Look at my cute cat!", picInfo: require("../../public/images/kiisu.jpg"), likeCount: 0},
            {id: 2, account: "@teacherKaren", postDate: "17.12.2023", PostText: "Who left the lights on in the kitchen?!", picInfo: null, likeCount: 0},
            {id: 3, account: "@teacherLaura", postDate: "18.12.2023", PostText: "I did, whoopsie:)!", picInfo: null, likeCount: 0},
            {id: 4, account: "@teacherKaren", postDate: "18.12.2023", PostText: "What an abysmal:(!", picInfo: null, likeCount: 0},
            {id: 5, account: "@coolChef78", postDate: "15.11.2024", PostText: "Tried a new recipe today, it was amazing!", picInfo: null, likeCount: 0},
            {id: 7, account: "@gamerDude", postDate: "23.11.2024", PostText: "Finally beat that boss fight after 3 hours. Phew!", picInfo: null, likeCount: 0},
            {id: 6, account: "@travelBuddy", postDate: "01.12.2024", PostText: "Just got back from the mountains. Stunning views!", picInfo: null, likeCount: 0},
            {id: 8, account: "@catLover123", postDate: "05.12.2024", PostText: "I just adopted another kitten. I'm so excited!", picInfo: null, likeCount: 0},
            {id: 9, account: "@teacherKaren", postDate: "02.12.2024", PostText: "Let's all be punctual for tomorrow's meeting, please.", picInfo: null, likeCount: 0},
            {id: 10, account: "@teacherLaura", postDate: "09.12.2024", PostText: "Reminder: Exams start next week. Good luck!", picInfo: null, likeCount: 0}

        ]*/

    },
    mutations: {/*
        IncreaseLike: (state, postId )=> {
            const post = state.postList.find(post => post.id === postId);
            if (post) {
                post.likeCount += 1;
            }
        },

        resetLikes: state => {
            state.postList.forEach(post => {
                post.likeCount = 0;
            })
        }*/
    },
    actions: {},
    getters: {}
});


