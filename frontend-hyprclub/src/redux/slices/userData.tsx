import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn : false,
    email : undefined,
    uid : undefined,
    name : undefined,
    age : undefined,
    bio : undefined,
    category : undefined,
    dateOfJoining : undefined,
    facebookUrl : undefined,
    flagCounter : undefined,
    gender : undefined,
    instagramUsername : undefined,
    interests : [],
    isCreator : false,
    isKycDone : false,
    isNsfw : false,
    phone : undefined,
    profileViews : undefined,
    portfolioUrl : undefined,
    twitterUsername : undefined,
    username : undefined,
    verified : false,
    youtubeUrl : undefined,
    profilePhotoUrl : undefined,
    bankDetails : {
        accountHolderName : undefined,
        accountHolderPhoneNumber : undefined,
        accountNumber : undefined,
        accountType : undefined,
        branchName : undefined,
        ifscCode : undefined
    },
    nfts : {
        createdNft : [],
        purchasedNft : [],
        savedNft : []
    },
    nftTokenIds : []
};

export const userDataSlice = createSlice({
    name : 'userData',
    initialState,
    reducers : {
        login : (state, {payload}) =>{
            state.loggedIn = true;
            state.uid = payload?.uid;
            state.email = payload?.email;
        },
        logout:(state) =>{
            state = initialState;
        },
        updateCurrentUserDetail: (state ,{payload}) => {
            state.name = payload?.name;
            state.age = payload?.age;
            state.bio = payload?.bio;
            state.category = payload?.category;
            state.dateOfJoining = payload?.dateOfJoining;
            state.facebookUrl = payload?.facebookProfileUrl;
            state.flagCounter = payload?.flagCounter;
            state.gender = payload?.gender;
            state.instagramUsername = payload?.instagramUsername;
            state.interests = payload?.interests;
            state.isCreator = payload?.isCreator;
            state.isKycDone = payload?.isKycDone;
            state.isNsfw = payload?.isNsfw;
            state.phone = payload?.phone;
            state.portfolioUrl = payload?.portfolioUrl;
            state.profileViews = payload?.profileViewsCount;
            state.twitterUsername = payload?.twitterUsername;
            state.username = payload?.username;
            state.verified = payload?.verified;
            state.youtubeUrl = payload?.youtubeProfileUrl;
            state.bankDetails.accountHolderName = payload?.bankAccountDetails.accountHolderName;
            state.bankDetails.accountHolderPhoneNumber = payload?.bankAccountDetails.accountHolderPhoneNumber;
            state.bankDetails.accountNumber = payload?.bankAccountDetails.accountNumber;
            state.bankDetails.accountType = payload?.bankAccountDetails.accountType;
            state.bankDetails.branchName = payload?.bankAccountDetails.branchName;
            state.bankDetails.ifscCode = payload?.bankAccountDetails.ifscCode;
            state.nfts.createdNft = payload?.nfts.createdNft;
            state.nfts.purchasedNft = payload?.nfts.purchasedNft;
            state.nfts.savedNft = payload?.nfts.savedNft;
        },
        updateUserDp: (state, {payload}) => {
            state.profilePhotoUrl = payload?.profilePhotoUrl;
        },
        nftTokenId : (state , {payload}) =>{
            state.nftTokenIds = payload?.nftIds;
        }
    }
});

export const UserDataActions = userDataSlice.actions;

export default userDataSlice.reducer;