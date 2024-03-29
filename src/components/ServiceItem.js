export default function ServiceItem({ name, description, children }) {
  return (
    <article className="col-md-4 mt-3 d-flex">
      <div className="card bg-darker text-light card-radius shadow-lg flex-fill">
        <div className="card-body flex-fill">
          {children}
          <h5 className="card-title">{name}</h5>
          <p className="card-text font-weight-light h6">{description}</p>
        </div>
      </div>
    </article>
  );
}
