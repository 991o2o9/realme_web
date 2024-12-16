const ArrowLeftPagination = ({ color }) => {
  return (
    <svg
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00027 17.67C7.81027 17.67 7.62027 17.6 7.47027 17.45L0.950273 10.93C-0.109727 9.87002 -0.109727 8.13002 0.950273 7.07002L7.47027 0.55002C7.76027 0.26002 8.24027 0.26002 8.53027 0.55002C8.82027 0.84002 8.82027 1.32002 8.53027 1.61002L2.01027 8.13002C1.53027 8.61002 1.53027 9.39002 2.01027 9.87002L8.53027 16.39C8.82027 16.68 8.82027 17.16 8.53027 17.45C8.38027 17.59 8.19027 17.67 8.00027 17.67Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeftPagination;
