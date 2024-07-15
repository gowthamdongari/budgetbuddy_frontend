import React from "react";
import Dropdown from "../dropdown/dropdown";

const friends = [
//   { name: "Jason Earl Romero", online: true },
  { name: "Kacy Brown", online: true },
  { name: "Rachel Minde", online: true },
  { name: "Tyler Dunnahoo", online: true },
  { name: "Alfredo Uzziel", online: false },
  { name: "Brad Hansen", online: false },
  { name: "Delsa Frank", online: false },
//   { name: "Lauren Lilley", online: false },
//   { name: "Marina Skendžić", online: false },
//   { name: "Nick Olsen", online: false },
];

const FriendsList = () => {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="relative flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#c3c2ca] to-brand-200 pb-4">
        <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 45.902 45.902"
            xml:space="preserve"
            width="24" height="24"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M43.162,26.681c-1.564-1.578-3.631-2.539-5.825-2.742c1.894-1.704,3.089-4.164,3.089-6.912 c0-5.141-4.166-9.307-9.308-9.307c-4.911,0-8.932,3.804-9.281,8.625c4.369,1.89,7.435,6.244,7.435,11.299 c0,1.846-0.42,3.65-1.201,5.287c1.125,0.588,2.162,1.348,3.066,2.26c2.318,2.334,3.635,5.561,3.61,8.851l-0.002,0.067 l-0.002,0.057l-0.082,1.557h11.149l0.092-12.33C45.921,30.878,44.936,28.466,43.162,26.681z"></path>{" "}
                  <path d="M23.184,34.558c1.893-1.703,3.092-4.164,3.092-6.912c0-5.142-4.168-9.309-9.309-9.309c-5.142,0-9.309,4.167-9.309,9.309 c0,2.743,1.194,5.202,3.084,6.906c-4.84,0.375-8.663,4.383-8.698,9.318l-0.092,1.853h14.153h15.553l0.092-1.714 c0.018-2.514-0.968-4.926-2.741-6.711C27.443,35.719,25.377,34.761,23.184,34.558z"></path>{" "}
                  <path d="M6.004,11.374v3.458c0,1.432,1.164,2.595,2.597,2.595c1.435,0,2.597-1.163,2.597-2.595v-3.458h3.454 c1.433,0,2.596-1.164,2.596-2.597c0-1.432-1.163-2.596-2.596-2.596h-3.454V2.774c0-1.433-1.162-2.595-2.597-2.595 c-1.433,0-2.597,1.162-2.597,2.595V6.18H2.596C1.161,6.18,0,7.344,0,8.776c0,1.433,1.161,2.597,2.596,2.597H6.004z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        
        </div>

        <div className="mt-16 flex h-fit flex-col items-center w-full">
          <div className="text-lg font-bold text-white text-center">
            Friends List
          </div>
          <ul className="divide-y divide-gray-200 w-full mt-4">
            {friends.map((friend, index) => (
              <li
                key={index}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    friend.online ? "bg-green-500" : "bg-gray-500"
                  } mr-3`}
                ></div>
                <span>{friend.name}</span>
                <Dropdown
                  button={<button className="ml-auto text-white">⋮</button>}
                  classNames="right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
                >
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      View Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Send Message
                    </li>
                  </ul>
                </Dropdown>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
