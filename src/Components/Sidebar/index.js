import React, {useState} from 'react'
import {SidebarWrapper,SearchWrapper,SearchInput, SearchButtonWrapper,SearchButton} from './SidebarComponents'

export const Sidebar = (props) => {
  return (
    <SidebarWrapper>
      <SearchWrapper>
        <SearchInput></SearchInput>
        <SearchButtonWrapper>
          <SearchButton></SearchButton>
        </SearchButtonWrapper>
      </SearchWrapper>
      {/* <ListWrapper></ListWrapper> */}
    </SidebarWrapper>
  )
}
