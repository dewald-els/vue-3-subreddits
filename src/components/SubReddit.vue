<template>
    
    <p v-if="isLoading">Loading...</p>
    <p v-if="subRedditError">{{ subRedditError }}</p>

    <ul class="listings">
        <li class="listing" v-for="listing in listings" :key="listing.data.id">
            <div v-if="listing.data.thumbnail && listing.data.thumbnail.includes('http')">
                <img class="listing__thumb" :src="listing.data.thumbnail" />
            </div>
            <h4>{{ listing.data.title }}</h4>
        </li>
    </ul>

</template>

<script>
import { toRefs } from "vue";
import useSubRedditListings from '@/composables/useSubRedditListings';
import useFilteredSubRedditListings from '@/composables/useFilteredSubRedditListings';

export default {
    name: "HelloWorld",
    props: {
        subreddit: { type: String, required: true }
    },
    setup(props) {
        
        const { subreddit } = toRefs( props );

        const { 
            isLoading, 
            subRedditError, 
            listings, 
            fetchListings 
        } = useSubRedditListings( subreddit );

        const { 
            filteredListings, 
            searchQuery 
        } = useFilteredSubRedditListings( listings );
        
        return {
            isLoading,
            subRedditError,
            listings: filteredListings,
            fetchListings,
            searchQuery,
            filteredListings
        };
    },
    watch: {
        subreddit: "fetchListings",
    },
};
</script>

<style scoped>
.listings {
    list-style-type: none;
    margin: 2em 0 0;
    padding: 0;
}
.listing {
    border-bottom: 1px solid #efefef;
    display: flex;
    padding-right: 1em;
}
.listing__thumb {
    margin-right: 1em;
    display: block;
}
</style>
