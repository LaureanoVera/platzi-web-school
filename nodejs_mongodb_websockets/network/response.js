exports.success = (req, res, message, paramStatus) => {
  res.status(paramStatus || 200).send({
    error: "",
    body: message,
  });
};

exports.error = (req, res, message, paramStatus, details) => {
  console.log("[response error]", details);

  res.status(paramStatus || 500).send({
    error: message,
    body: "",
  });
};
