const Icard = ({data}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '16px'
    }}>
      {data.map((student, index) => (
        <div
          key={student?.name || index}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ margin: '0 0 8px' }}>{student?.name}</h3>
          <p style={{ margin: '4px 0' }}>Age: {student?.age}</p>
          <p style={{ margin: '4px 0' }}>Branch: {student?.branch}</p>
          <p style={{ margin: '4px 0' }}>College: {student?.college}</p>
          <p style={{ margin: '4px 0' }}>Location: {student?.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Icard;


