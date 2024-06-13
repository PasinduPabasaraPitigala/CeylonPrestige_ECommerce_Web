const ProductDescription = () => {
  return (
    <div className={"mt-20"}>
      <div className={"flex gap-3 mb-4"}>
        <button
          className={"btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36"}
        >
          Description
        </button>
        <button
          className={"btn_dark_outline !rounded-none !text-xs !py-[6px] w-36"}
        >
          care Guide
        </button>

        {/*  <button
              className={"btn_dark_outline !rounded-none !text-xs !py-[6px] w-36"}
          >
              Size Guide
          </button>*/}
      </div>
      <div className={"flex flex-col pb-16"}>
        <p className={"text-sm"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          eaque iste minima, molestias praesentium quia rerum suscipit
          voluptatum. Animi aperiam cumque, dignissimos eum nemo nobis nulla
          perferendis placeat qui sit? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus ducimus excepturi fugit harum in incidunt
          iste numquam obcaecati odit perspiciatis porro quas quidem reiciendis
          repellat repudiandae rerum, sit voluptas voluptate!
        </p>
        <p className={"text-sm"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          dignissimos dolor dolores nobis numquam placeat sint sunt. Dolore hic
          modi nobis rerum similique velit? Aspernatur fugiat inventore libero
          mollitia praesentium!
        </p>
      </div>
    </div>
  );
};
export default ProductDescription;
