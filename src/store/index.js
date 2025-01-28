import { createStore } from 'vuex';

const store = createStore({
  state() {

    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image:
              "https://watermark.lovepik.com/photo/20211209/large/lovepik-sea-of-clouds-on-the-top-of-the-plateau-in-picture_501715065.jpg",
            title: "การท่องเที่ยว",
            description: "ทะเลหมอกบนที่ราบสูงภาคเหนือของประเทศไทย",
          },
          {
            id: "m2",
            image:
              "https://stadiumth.s3.ap-southeast-1.amazonaws.com/upload/1687518087620.jpg",
            title: "การออกกำลังกาย",
            description: "เตะตะกร้อ",
          },
          {
            id: "m3",
            image:
              "https://img.pikbest.com/wp/202345/sleeping-boy-cartoon-illustration-showing-a-at-night_9581472.jpg!sw800",
            title: "การนอน",
            description: "นอนไม่เกิน 6 ทุ่ม",
          },
          {
            id: "m4",
            image:
              "https://img.pikbest.com/ai/illus_our/20230427/4b6f742aaffda591dc4ff58ce2395773.jpg!w700wp",
            title: "การใช้จ่ายเงิน",
            description: "ใช้อาทิตล่ะไม่เกิน 1,000 บ.",
          }
      ] 
    } 
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;