<script setup>
import { useStore } from "@/stores/user.js";

async function logout() {
    useStore().setUser(null);
}

</script>