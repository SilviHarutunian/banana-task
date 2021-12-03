export type Course = {
  id: number;
  favorite: boolean;
  popular: number;
  url: string;
  createDate: Date;
};

export type Category = {
  value: string;
  label: string;
};

export interface RootStateType {
  selectedCategory: string;
  categories: Category[];
  courses: Course[];
}

const initialState: RootStateType = {
  selectedCategory: "popular",
  categories: [
    { value: "popular", label: "Popular" },
    { value: "favorite", label: "Favorite" },
    { value: "new", label: "New" },
  ],
  courses: [
    {
      id: 1,
      favorite: true,
      popular: 2000,
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-707450939-1585077934.jpg?crop=1.00xw:0.334xh;0,0.238xh&resize=1200:*",
      createDate: new Date(2021, 10, 10),
    },
    {
      id: 2,
      favorite: false,
      popular: 5000,
      url: "https://images.squarespace-cdn.com/content/v1/58e52f02f5e2318757c47814/1552243562818-0VL2C6ALHMRSSR07Y9R9/pf-3-strawbs-more-white-sp.jpg?format=1000w",
      createDate: new Date(2021, 11, 1),
    },
    {
      id: 3,
      favorite: false,
      popular: 8000,
      url: "https://www.mountelizabeth.com.sg/images/default-source/default-album/super-fruits-acai-berry.jpg?sfvrsn=ab92d011_0",
      createDate: new Date(2021, 10, 8),
    },
    {
      id: 4,
      favorite: true,
      popular: 3000,
      url: "https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg",
      createDate: new Date(2021, 10, 25),
    },
    {
      id: 5,
      favorite: true,
      popular: 7000,
      url: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2020-7/fruit-still-life-1296x728-header.jpg?w=1155&h=1528",
      createDate: new Date(2021, 0, 17),
    },
    {
      id: 6,
      favorite: false,
      popular: 6000,
      url: "https://californiaavocado.com/wp-content/uploads/2020/07/avocado-fruit-berry.jpg",
      createDate: new Date(2021, 10, 29),
    },
    {
      id: 7,
      favorite: true,
      popular: 500,
      url: "https://hospitalityinsights.ehl.edu/hubfs/Blog-EHL-Insights/Article-Header-EHL-Insights/slowest-perishable-vegetables-fruits.jpeg",
      createDate: new Date(2021, 9, 20),
    },
    {
      id: 8,
      favorite: false,
      popular: 3500,
      url: "https://www.eventeny.com/event-pics/454-cover-pv81pkl0yfes1605203485-1200.jpg",
      createDate: new Date(2021, 8, 21),
    },
    {
      id: 9,
      favorite: false,
      popular: 4500,
      url: "https://www.mensjournal.com/wp-content/uploads/mf/grapefruit_0.jpg?w=900&quality=86&strip=all",
      createDate: new Date(2021, 5, 10),
    },
    {
      id: 10,
      favorite: true,
      popular: 5500,
      url: "https://images.everydayhealth.com/images/best-winter-fruits-08-1440x810.jpg",
      createDate: new Date(2021, 7, 15),
    },
  ],
};

const reducer = (
  state = initialState,
  action: { type: string; payload: { selectedCategory: string } }
) => {
  if (action.type === "CHANGE_CATEGORY") {
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
    };
  }

  return state;
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;
