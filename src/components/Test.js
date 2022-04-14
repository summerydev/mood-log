export default function Test() {
  const url = "http://16a1-121-66-139-243.ngrok.io/test";
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const image = e.target.image.value;
    const formData = new FormData();

    formData.append("text", text);
    formData.append("image", image[0]);
    register(formData);
    console.log(formData);
    console.log(text);
    console.log(image);
  };

  function register(data) {
      console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="text" />
        <input type="file" name="image" />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
