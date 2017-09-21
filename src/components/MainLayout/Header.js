import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.css';
import femirrorLogo from '../../assets/femirror.png'
import {arrayToTree} from '../../utils/index'

const Header =({dispath, location,categories })=> {
// console.log('location',location)
  const menuTree = arrayToTree(categories,'id','parent');
  const levelMap = {}
  // 递归生成菜单
  const getMenus = (menuTreeN, siderFoldN) => {
    return menuTreeN.map((item) => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }
        return (
          <Menu.SubMenu
            key={item.slug}
            title={<span>
              {(!siderFoldN || !menuTree.includes(item)) && item.title}
            </span>}
          >
            {getMenus(item.children, siderFoldN)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={item.slug}>
          <Link to={`/categories?slug=${item.slug}`}>
            {(!siderFoldN || !menuTree.includes(item)) && item.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  const menuItems = getMenus(menuTree, false)
  let slug = location.query?location.query.slug:'';
  slug = slug?slug:'index';
  return (
      <div className={styles.header} >
        <div className={styles.wrap}>
          <div style={{float:'left'}}>
            <Link to={'/'}> <img className={styles.logo} src={femirrorLogo} alt=""/></Link>
          </div>
          <Menu
            className={styles.menu}
            selectedKeys={[slug]}
            mode="horizontal"
          >
            <Menu.Item key={`index`}>
              <Link to={`/`}>首页</Link>
          </Menu.Item>
            {menuItems}
            <Menu.Item key={`github`}>
              <a target={'_blank'} href="https://github.com/tyaqing/react-wordpress"><Icon type="github" />GitHub</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
  );
}

export default Header;
