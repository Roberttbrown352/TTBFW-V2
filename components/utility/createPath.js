const createPath = (title) => {
  return ("#" + title.replace(/[:?]/g,'').toLowerCase().split(" ").join("-"))
}

export default createPath
