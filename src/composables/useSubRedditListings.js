import { onMounted, ref } from "vue";

export default function useSubRedditListings(subreddit) {
    const listings = ref([]);
    const isLoading = ref(true);
    const subRedditError = ref('');

    const fetchListings = async () => {
        isLoading.value = true;
        listings.value = await fetch(
            `https://cors-anywhere-noroff.herokuapp.com/https://www.reddit.com/r/${subreddit.value}/new.json`
        )
            .then((r) => r.json())
            .then((r) => r.data.children)
            .then(data => {
                isLoading.value = false;
                return data;
            })
            .catch(error => {
                isLoading.value = false;
                subRedditError.value = error.message
            });
    };

    onMounted(fetchListings);

    return {
        isLoading,
        subRedditError,
        listings,
        fetchListings
    }
}