import { ref, computed } from "vue";

export default function useFilteredSubRedditListings(listings) {
    const searchQuery = ref('');
    const filteredListings = computed(() => {
        return listings.value.filter(
            listing => listing.data.title.includes(searchQuery.value)
        );
    });

    return {
        searchQuery, 
        filteredListings
    }
}