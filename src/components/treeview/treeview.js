
import React from 'react'
import './treeview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'


class TreeView extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.getChildrenRecursively = this.getChildrenRecursively.bind(this)

        this.renderNode = this.renderNode.bind(this)
        this.toggleNode = this.toggleNode.bind(this)
        this.selectNode = this.selectNode.bind(this)
    }


    selectNode(id) {
        this.props.treeSelectTreeNode(this.props.domain, id)
    }


    toggleNode(id) {
        this.props.treeToggleExpandNode(this.props.domain, id)
    }

    selectAndClose(id) {
        this.props.treeSelectTreeNode(this.props.domain, id)     
        this.props.closeMe()   
    }


    renderNode(node) {
        return (
            <div className="treeview-item-one">
                {node.children && node.children.length > 0 ?
                    <span onClick={() => this.toggleNode(node.id)} >
                        {node.expanded ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />}
                    </span>
                    : null
                }
                <span className={node.selected ? "treeview-selected" : ""}
                    onClick={() => this.selectNode(node.id)}
                    onDoubleClick={() => this.selectAndClose(node.id)}>
                    {node.name}
                </span>
                {(node.children && node.children.length !== 0 && node.expanded) ?
                    <div className="treeview-item-one">
                        {this.getChildrenRecursively(node)}</div>
                    : null
                }
            </div>
        )
    }


    getChildrenRecursively(tree) {
        if (!tree || tree.children.length === 0)
            return null

        return tree.children.map(child => {
            return this.renderNode(child)
        })
    }

    render() {

        return this.props.showRoot ?
            (
                <div>
                    {this.renderNode(this.props.tree)}
                    <div className="treeview-item-one">
                        <div>{this.getChildrenRecursively(this.props.tree)}</div>
                    </div>
                </div>
            )
            :
            (
                <div>{this.getChildrenRecursively(this.props.tree)}</div>
            )
    }
}



export default TreeView;


