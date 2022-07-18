import { useRouter } from 'vue-router';
import { removeLocalStorage } from "@/utils";
export default function loginOut() {
    const router = useRouter()
    // 登出
    const handleLoginOut = () => {
        setTimeout(() => {
            removeLocalStorage("token");
            router.push({
                path: '/login'
            })

        }, 1000);
    };
    return {
        handleLoginOut
    }
}