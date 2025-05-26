import React from 'react'

function TopIcon({className}) {
  // 스크롤 관리
  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={className} onClick={upScroll}>
        <img src="/imgs/_icons/TopIcon.svg" alt="topicon"/>
    </div>
  )
}

export default TopIcon