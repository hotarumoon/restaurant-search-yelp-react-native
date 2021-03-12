import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer dloXANmOA6hemiew1GWz4wpSbop8Q5shV-ccIv8i-csa1twh-DzJS3pyLxbOmlF_d5FcvimL7PM7J6zyY8dlka_3HAxUwwR8_O9iTHJ_7VnL0_gc1tsPnvB4sKncX3Yx'
    }
});



//yelp.get('/search');